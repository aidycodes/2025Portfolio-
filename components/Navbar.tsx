'use client'
import { RefObject, useRef } from "react";
import { useNavScroll } from "@/zustand/NavScrollStore";
import { useInView } from "motion/react";
import { NavScrollStore } from "@/zustand/NavScrollStore";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
    weight: ['300', '400', '700', '900'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Ensure the font is displayed immediately
  });


const Navbar = () => {

   const {
    aboutRef,
    techRef,
    projectsRef,
    contactRef,
    aboutViewRef,
    projectsViewRef,
    scrollTo
   } = useNavScroll((state: NavScrollStore) => state)

   const fallbackRef = useRef<HTMLDivElement>(null) //stops useInView from throwing an error before the ref has been passed to the store

   const aboutView = useInView(aboutViewRef ? aboutViewRef : fallbackRef)
   const techView = useInView(techRef ? techRef : fallbackRef)
   const projectsView = useInView(projectsRef ? projectsRef : fallbackRef)
   const projectsViewExtended = useInView(projectsViewRef ? projectsViewRef : fallbackRef)
   
    return (
        <div className={`${nunito.className } font-bold relative w-full z-50  `}>
            <div   className="fixed top-0 left-0 right-0 border-gray-200 p-2 backdrop-blur-sm">
                <div className="flex justify-end gap-6 lg:w-[80%] w-[90%] mx-auto ">
                    <div className="relative" onClick={() => scrollTo(aboutRef as RefObject<HTMLDivElement>) }>                    
                        <h1 className="top-0 left-0 absolute text-2xl hover:text-gray-100 transition-all duration-300 cursor-pointer font-extrabold text-transparent blur-lg ">About</h1>
                        <h1 className={`text-2xl h hover:scale-110 rounded-xl transition-all duration-300  cursor-pointer animate-pulse transition-all duration-500
                             ${aboutView && 'text-lime-400 scale-110'} `}>About</h1>
                    </div>
                    <div className="relative" onClick={() => scrollTo(techRef as RefObject<HTMLDivElement>) }>
                        <h1 className="top-0 left-0 absolute text-2xl hover:text-gray-100 transition-all duration-300 cursor-pointer font-extrabold text-transparent blur-lg ">Tech</h1>
                        <h1 className={`text-2xl h hover:scale-110 rounded-xl transition-all duration-300 cursor-pointer animate-pulse
                             ${!aboutView && techView && 'text-lime-400 scale-110'}`}>Tech</h1>
                    </div>
                    <div className="relative" onClick={() => scrollTo(projectsRef as RefObject<HTMLDivElement>) }>
                        <h1 className="top-0 left-0 absolute text-2xl hover:text-gray-100 transition-all duration-300 cursor-pointer font-extrabold text-transparent blur-lg ">Projects</h1>
                        <h1 className={`text-2xl h hover:scale-110 rounded-xl transition-all duration-300 cursor-pointer animate-pulse
                              ${!techView && projectsViewExtended && 'text-lime-400 scale-110'} ${!techView && projectsView && 'text-lime-400 scale-110'}`}>Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
