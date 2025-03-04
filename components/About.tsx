'use client'
import React, { useEffect, useRef } from 'react';
import ZigzagContainer from './ZigzagContainer';
import ZigzagContainerTop from './ZigzagContainer Top';
import MaxWidthWrapper from './MaxWidthWrapper';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';
import { useNavScroll } from '../zustand/NavScrollStore';
import { RefObject } from 'react';

const JetBrainsMonoBold = localFont({ src: '../fonts/fonts/webfonts/JetBrainsMono-Bold.woff2' });
const JetBrainsMonoLight = localFont({ src: '../fonts/fonts/webfonts/JetBrainsMono-Light.woff2' });
const JetBrainsMonoRegular = localFont({ src: '../fonts/fonts/webfonts/JetBrainsMono-Regular.woff2' });
const ZigzagBackground = () => {
    return (
        <div className="relative h-[100px] bg-blue-500 clip-path-zigzag ">
         
        </div>
    );
};

export default ZigzagBackground;


export const About = () => {
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
        <>
        <div className="relative" />
        <div ref={aboutRef} className="absolute top-35 -mt-[100px] lg:-mt-[110px] xl:-mt-[240px] " />
                <div  className="-mt-[100px]"/>
        <ZigzagContainerTop />
        
            <motion.div  className="w-full mt-[100px] bg-[#6e00b3] opacity-80">
                <MaxWidthWrapper>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}} className="flex flex-col items-center ml-10 justify-end p-8 space-y-4">
                        <h1 ref={aboutViewRef} className={`text-2xl font-bold text-gray-100 justify-center ${JetBrainsMonoBold.className}`}>
                            Full Stack Developer From Bristol, UK
                        </h1>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center space-y-2 w-2/3">
                                <h2 className={`text-lg self-start text-gray-100 text-pretty tracking-wide ${JetBrainsMonoRegular.className}`}>
                                    About Me
                                </h2>
                                <p className={`text-gray-100 text-pretty ${JetBrainsMonoLight.className}`}>
                                    Hello! I&apos;m a Dedicated Full Stack Developer based in Bristol,
                                    UK.<br/> Commited to crafting beautiful and functional websites and web applications
                                    With a background in computer science and several years of experience in the tech industry,
                                    I specialize in building responsive, user-friendly interfaces and robust backend systems.
                                </p>
                                <h2 className={`text-lg self-start text-gray-100 text-pretty tracking-wide ${JetBrainsMonoRegular.className}`}>
                                    Hobbys & Interests
                                </h2>
                                <p className={`text-gray-100 text-pretty ${JetBrainsMonoLight.className}`} >
                                    I am particularly interested in the intersection of technology and design, 
                                    and I love working on projects that challenge me to think creatively.
                                    In my free time, I have a passion for cybersecurity, spefically penetration testing, working with friends to hack into advanced ctfs using tools like metasploit, nmap, wireshark, and more. 
                                    I am currently working on an open source Auth solutation for nextJs which will intergrate with drizzle and prisma orms when using postgres, redis or mysql.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </MaxWidthWrapper>
            </motion.div>
        
        <ZigzagContainer />
        </>
    )
}