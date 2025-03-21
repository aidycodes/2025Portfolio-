'use client'
import ProjectsShowcase from "./projects/ProjectShowCase";
import { useRef, useEffect } from "react";
import { useNavScroll } from "@/zustand/NavScrollStore";
import { RefObject } from "react";

export const Projects = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const projectsViewRef = useRef<HTMLDivElement>(null);
    const setRef = useNavScroll((state) => state.setRef)
   
    useEffect(() => {
        setRef(projectsRef as RefObject<HTMLDivElement>, 'projects');
    }, [projectsRef, setRef]);

    useEffect(() => {
        setRef(projectsViewRef as RefObject<HTMLDivElement>, 'projectsView');
    }, [projectsViewRef, setRef]);

    return (
   <>
            <div id="projects" ref={projectsRef} className="flex justify-center md:gap-8 ">
                <ProjectsShowcase />
            </div> 
    </>
    )
}