import { useRef } from "react";

export const useScrollTo = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    console.log(ref)
    if (ref?.current) {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return {
    scrollTo,
    projectsRef,
    aboutRef,
    techRef,
    contactRef,
  }
}
