'use client'
import { Suspense } from 'react';
import ParticleBackground from '../../components/ParticleBackground';
import Hero from '../../components/Hero';
import { About } from '../../components/About';
import { Projects } from '../../components/Projects';
import { Tech } from '../../components/Tech';
import Contact from '../../components/Contact';
import { Button } from '../../components/ui/button';
import { MessageCircle } from 'lucide-react';
import About2 from '../../components/About2';

export default function Page() {
    return (
        <main className='relative'>
            <ParticleBackground />
            <Suspense fallback={<div className="h-screen"></div>}>
            <Hero />
            </Suspense>

                {/* <About /> */}
                <About2 />
                <Tech />
     
            <div className="mt-40" >
            <Projects />
            </div>
        <div className='fixed bottom-0 right-0 m-4'>       
            <Contact >
        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-full px-6 py-3 shadow-lg transition-all duration-300 transform hover:scale-105">
          <MessageCircle className="mr-2 h-5 w-5" />
          Send Me a Message
        </Button>
            </Contact>
            </div>
        </main>
    );
}

