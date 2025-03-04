import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

const SendMessageDialog = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { mutate: sendMessage, isPending, error } = useMutation({
    mutationFn: async () => {
        console.log({name, email, message})
      const response = await fetch('/api/v1/message', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
      });
      console.log({response})
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      const json = await response.json();
      console.log({json})
     
    },
    onSuccess: () => {
      setIsSent(true);
      setName('');
        setEmail('');
        setMessage('');
    },
    onError: () => {
      setIsSent(false);
    },
  });

  useEffect(() => {
    let resetTimer: NodeJS.Timeout;
    if (!isOpen) {
      resetTimer = setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(false);
      }, 300);
    }

    return () => {
      if (resetTimer) clearTimeout(resetTimer);
    };
  }, [isOpen]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  }



  return (
    
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-zinc-900 rounded-lg border-none shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {isSent ? 'Message Sent!' : "Let's Chat!"}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {isSent ? '.' : `Fill out the form below and I'll get back to you soon.`}
          </DialogDescription>
        </DialogHeader>

        {!isSent ? (
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-400 font-medium">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-300 text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-400 font-medium">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-gray-300 text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md min-h-32"
                placeholder="What would you like to say?"
                required
              />
            </div>
            <div className="space-y-2">
                <p className="text-red-500 h-2">{error && error.message}</p>
            </div>

            <DialogFooter className="pt-4">
              <Button
                disabled={isPending}

                type="submit"
                className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600
                 hover:to-blue-600 text-white font-medium rounded-full py-2 shadow-md transition-all duration-300 ${isPending ? 'opacity-50' : ''}`}
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-1">Message Sent!</h3>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-400">Thanks for reaching out. I'll respond soon.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SendMessageDialog;
