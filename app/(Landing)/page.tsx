'use client'
import { Suspense } from 'react';
import ParticleBackground from '../../components/ParticleBackground';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Hero from '../../components/Hero';
import { About } from '../../components/About';
import { Projects } from '../../components/Projects';
import { Tech } from '../../components/Tech';

export default function Page() {
    return (
        <main>
            <ParticleBackground />
            <Suspense fallback={<div className="h-screen"></div>}>
            <Hero />
            </Suspense>
         
                <About />
            <Suspense fallback={null}>
                <Tech />
            </Suspense>
            <Projects />
        </main>
    );
}

