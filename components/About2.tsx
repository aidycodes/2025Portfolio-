'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useNavScroll } from '../zustand/NavScrollStore';
import { RefObject, useEffect, useRef } from 'react';
 

export default function AboutMePage() {

    const aboutRef = useRef<HTMLDivElement>(null);
    const aboutViewRef = useRef<HTMLDivElement>(null);
    const setRef = useNavScroll((state) => state.setRef);

    useEffect(() => {
        setRef(aboutRef as RefObject<HTMLDivElement>, 'about'); 
    },[aboutRef, setRef])

    useEffect(() => {
        setRef(aboutViewRef as RefObject<HTMLDivElement>, 'aboutView'); 
    }, [aboutViewRef, setRef]);

  return (
    <div ref={aboutRef} className="min-h-screen  text-white ">
      <div className="container mx-auto md:px-4 py-12">
        {/* Desktop layout with overlapping sections */}
        {/* browser window */}
        <div ref={aboutViewRef} className="h-2" ></div>
        <div  className="relative hidden lg:block  " >
          {/* Section 1: About Me Text (Top Left) */}
          <motion.div 
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="absolute left-0 top-0 w-[48%]  overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-gray-800"
          >
            {/* Browser Window Header */}
            <div className="bg-slate-900 px-4 py-2 flexitems-center border-b border-gray-900">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400 uppercase tracking-wider">Who I Am</h2>
              <p className="mb-4">
              Hello! I&apos;m a Dedicated Full Stack Developer based in Bristol, UK. 
              commited to crafting beautiful and functional websites and web applications. 
              With a background in computer science and several years of experience in the tech industry,
               I specialize in building responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="mb-4">
                I believe that design and code can be a powerful force for good in the world.
              </p>
              <Link
                href="#projects"
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"
              >
                SEE MY PROJECTS
              </Link>
            </div>
          </motion.div>

          {/* Section 2: Profile Image (Middle Right) */}
          <motion.div 
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="absolute right-20 lg:right-0 xl:right-40 top-[150px] w-[40%] lg:w-[40%] xl:w-[28%] h-[400px] rounded-lg  shadow-lg"
          >
            <Image
              src="/tech/web-development.png"
              alt="Profile image"
              fill
              className="object-contain md:object-cover"
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-6 left-6">
              <h2 className="text-2xl font-bold text-white mb-2">My Journey</h2>
              <p className="text-gray-200 max-w-md">A visual representation of my path through life and career.</p>
            </div> */}
          </motion.div>

          {/* Section 3: Hobbies & Interests Text (Bottom Left) */}
          <motion.div 
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: -120, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="absolute left-0 top-[500px] mt-8 xl:mt-0 w-[48%] overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-gray-800"
          >
            {/* Browser Window Header */}
            <div className=" bg-slate-900 px-4 py-2 flex items-center border-b border-gray-900">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 ">
              <h2 className="text-2xl font-bold mb-4 text-purple-400 uppercase tracking-wider">Hobbies & Interests</h2>
              <p className="mb-4">
              I am particularly interested in the intersection of technology and design. 
              I enjoy getting the small details of the UI/UX right and I love working on projects that challenge me to think creatively.
               When I&apos;m not developing web apps, I am currently studying for Aws Cloud Certifications and enjoy doing CTF cybersecurity challenges with HTB and TryHackMe.
              </p>
            </div>
          </motion.div>

          {/* Section 4: Hobbies Image (Bottom Right) */}
          {/* <div className="absolute right-0 top-[750px] w-[48%] h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Hobbies and interests"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-6 left-6">
              <h2 className="text-2xl font-bold text-white mb-2">My Passions</h2>
              <p className="text-gray-200 max-w-md">
                Visual glimpses into the activities that bring me joy and fulfillment.
              </p>
            </div>
          </div> */}
        </div>

        {/* Mobile layout (hidden on desktop) */}
        <div className="grid grid-cols-1 gap-8 lg:hidden">
          {/* Section 1: About Me Text */}
          <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden  border-gray-800">
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-900 to-transparent z-10" />
            
            <div  className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400 uppercase tracking-wider">Who I Am</h2>
              <p className="mb-4">
                Hello! I&apos;m a Dedicated Full Stack Developer based in Bristol, UK. 
                commited to crafting beautiful and functional websites and web applications. 
                With a background in computer science and several years of experience in the tech industry,
                 I specialize in building responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="mb-4">
                I believe that design and code can be a powerful force for good in the world.
              </p>
         
              <h2 className="text-2xl font-bold mb-4 text-purple-400 uppercase tracking-wider">Hobbies & Interests</h2>
              <p className="mb-4">
                I am particularly interested in the intersection of technology and design.
                I enjoy getting the small details of the UI/UX right and I love working on projects that challenge me to think creatively.
                When Im not developing web apps, I am currently studying for Aws Cloud Certifications and enjoy doing CTF cybersecurity challenges with HTB and TryHackMe.
              </p>   
          
            </div>
            
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-transparent z-10" />
          </div>


        </div>
      </div>
    </div>
  )
}