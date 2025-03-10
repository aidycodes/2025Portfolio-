'use client'
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'], 
    subsets: ['latin'], 
    display: 'swap', 
})
const colors = [
    "bg-red-400", "bg-orange-400", "bg-yellow-400",
    "bg-green-400", "bg-blue-400", "bg-indigo-400", "bg-violet-400"
];

const Hero = () => {
    const [ hideScroll, setHideScroll ] = useState(false)
    const { scrollY } = useScroll()


    useMotionValueEvent(scrollY, "change", () => {
       setHideScroll(true)
    })

    return (
        <div className={`${merriweather.className} relative w-full min-h-screen`}>
            {/* Rainbow lines */}
            <div className="absolute opacity-20 inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
                {colors.map((color, colorIndex) => (
                    <motion.div
                        key={colorIndex}
                        className={`absolute w-full h-2 ${color}`}
                        initial={{ 
                            y: "-50vh",
                            opacity: 0
                        }}
                        animate={{ 
                            y: [
                                "-50vh", 
                                `${-15 + (colorIndex * 3)}vh`, 
                                `${-15 + (colorIndex * 3)}vh`
                            ],
                            opacity: [0, 0.4, 1]
                        }}
                        transition={{ 
                            duration: 6,
                            times: [0, 0.2, 1],
                            ease: "easeOut",
                            delay: colorIndex * 0.1
                        }}
                    />
                ))}
            </div>

            {/* Content wrapped in MaxWidthWrapper */}
            <MaxWidthWrapper className="relative">
                <div className="flex justify-center h-screen gap-8">
                    <div className="flex flex-col items-center justify-center flex-1">
                        {/* Name with a hover effect */}
                        <motion.h1 
                            className=" text-center  text-pretty text-4xl md:text-6xl lg:text-8xl font-bold text-gray-100 opacity-90 leading-tight cursor-pointer"
                            initial={{ opacity: 0, y: -100 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Aidan O&apos;Connor <br/> 
                            <span className="text-gray-400">Web Developer</span>
                        </motion.h1>

                        {/* Location with a delay effect */}
                        <motion.p 
                            className="text-xl text-gray-500 mt-2"
                            initial={{ opacity: 0, y: 0 }} 
                            animate={{ opacity: [0, 0, 1], y: 0 }}
                            transition={{ times: [0, 0.7, 1], duration: 1 }}
                        >
                            Bristol, United Kingdom
                        </motion.p>

                        {/* Call-to-Action Button */}
                        <motion.a 

                            href="#projects"
                            className="mt-6 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-800 rounded-[4px] transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            View My Work
                        </motion.a>

                        {/* Scroll Down Indicator */}
                        <motion.div 
                            className={`absolute bottom-10 text-gray-400 text-sm flex flex-col items-center cursor-pointer transition-opacity duration-300 ${hideScroll ? 'opacity-0' : 'opacity-100'}`}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <span>Scroll Down</span>
                            <motion.div className="w-2 h-2 bg-gray-400 rounded-full mt-1" />
                        </motion.div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Hero;
