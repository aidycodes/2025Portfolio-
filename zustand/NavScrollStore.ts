import { create } from 'zustand'
import { RefObject } from 'react'

export interface NavScrollStore {
  aboutRef: RefObject<HTMLDivElement> | null;
  techRef: RefObject<HTMLDivElement> | null;
  projectsRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  aboutViewRef: RefObject<HTMLDivElement> | null;
  projectsViewRef: RefObject<HTMLDivElement> | null;
  setRef: (ref: RefObject<HTMLDivElement>, type: 'about' | 'tech' | 'projects' | 'contact' | 'aboutView' | 'projectsView' ) => void;
  scrollTo: (ref: RefObject<HTMLDivElement>) => void;
}

export const useNavScroll = create<NavScrollStore>((set) => ({
  aboutRef: null,
  techRef: null,
  projectsRef: null,
  contactRef: null,
  aboutViewRef: null,
  projectsViewRef: null,
  setRef: (ref, type) => {
    switch (type) {
      case 'aboutView':
        set({ aboutViewRef: ref });
        break;
      case 'projectsView':
        set({ projectsViewRef: ref });
        break;
      case 'about':
        set({ aboutRef: ref });
        break;
      case 'tech':
        set({ techRef: ref });
        break;
      case 'projects':
        set({ projectsRef: ref });
        break;
      case 'contact':
        set({ contactRef: ref });
        break;
      default:
        break;
    }
  },
  scrollTo: (ref: RefObject<HTMLDivElement>) => {
    console.log(ref)
    if (ref?.current) {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}))