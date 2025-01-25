import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
    return (
        <MaxWidthWrapper >
            <div className="flex   justify-center h-screen gap-8 ">
                <div className="flex flex-col items-center justify-center flex-1">
                <motion.h1 className="text-8xl  font-bold text-gray-100 opacity-90"
                 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    Aidan O'Connor <br/> <span className="text-gray-400">Web Developer</span></motion.h1>
                <motion.p className="text-lg text-gray-500" 
                initial={{ opacity: 0, y: 0 }} animate={{ opacity: [0,0,1], y: 0 }}
                 transition={{ times: [0,0.7,1], duration: 1 }}>React, NextJS, Typescript, SQL, Python, AWS</motion.p>
                </div>
                <div className="flex flex-col items-center justify-center p-16 ">
                    <div className="h-[400px] w-[400px] bg-red-500"/>
                </div>
            </div>
      
        </MaxWidthWrapper>
    )
}
export default Hero;