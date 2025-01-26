'use client'
import ProjectsShowcase from "./projects/ProjectShowCase";
import  MaxWidthWrapper  from "./MaxWidthWrapper";
import { useRef } from "react";

export const Projects = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    return (
        <MaxWidthWrapper >
            <h1 className="text-4xl font-bold " ref={projectsRef}>Projects</h1>
            <div className="flex justify-center gap-8 ">
                <ProjectsShowcase />
            </div>
        </MaxWidthWrapper>
    )
}