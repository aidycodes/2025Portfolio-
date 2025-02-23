'use client'
import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const TECH_STACK = [
    {
        name: "React",
        icon: <Image src="/tech/react.svg" alt="React" width={100} height={100} />        
    },
    {
        name: "NextJS",
        icon: <Image src="/tech/nextjs-13.svg" alt="Next.js" width={200} height={200} />
    },
    {
        name: "Tailwind",
        icon: <Image src="/tech/tailwindcss.svg" alt="Tailwind" width={100} height={100} />
    },
    {
        name: "Typescript",
        icon: <Image src="/tech/typescript.svg" alt="Typescript" width={100} height={100} />
    },
    {
        name: "Node.js",
        icon: <Image src="/tech/nodejs.svg" alt="Node.js" width={100} height={100} />
    },
    {
        name: "PostgreSQL",
        icon: <Image src="/tech/postgresql.svg" alt="PostgreSQL" width={100} height={100} />
    },
    {
        name: "MySQL",
        icon: <Image src="/tech/mysql.svg" alt="MySQL" width={100} height={100} />
    },
    {
        name: "MongoDB",
        icon: <Image src="/tech/mongodb.svg" alt="MongoDB" width={100} height={100} />
    },
    {
        name: "Redis",
        icon: <Image src="/tech/redis.svg" alt="Redis" width={100} height={100} />
    },
    {
        name: "Prisma",
        icon: <Image src="/tech/prisma.svg" alt="Prisma" width={100} height={100} />
    },
    {
        name: "Drizzle",
        icon: <Image src="/tech/drizzle.svg" alt="Drizzle" width={100} height={100} />
    },
    {
        name: "Trpc",
        icon: <Image src="/tech/trpc.svg" alt="Trpc" width={100} height={100} />
    },
]

export const Tech = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return null;

    return (
        <MaxWidthWrapper>
            <div className="flex justify-center">
                <div className="mt-20">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-100 text-pretty m-10">Tech</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 space-y-0">
                        {TECH_STACK.map(({ icon, name }, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 100 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.4 }} 
                              
                                whileHover={{ y: -5, transition: { duration: 0 } }}
                                

                                key={name} 
                                className="group rounded-xl border bg-card text-card-foreground shadow ring-1 ring-blue-900 flex flex-col items-center justify-center h-40 w-40 relative cursor-pointer hover:ring-blue-500"
                            >
                                <CardContent className="flex items-center justify-center mt-4 z-10 group-hover:scale-110 transition-all duration-300">
                                    {icon}
                                </CardContent>
                                <CardFooter className="absolute top-[140px]">
                                    <CardTitle className="text-center text-muted-foreground group-hover:text-gray-300">{name}</CardTitle>
                                </CardFooter>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}