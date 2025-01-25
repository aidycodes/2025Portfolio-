"use client"
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticleBackground = ({children}: {children?: React.ReactNode}) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="fixed inset-0 -z-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: "transparent",
                    },
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 }
                        },
                        opacity: {
                            value: 0.5
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: "bounce"
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#808080",
                            opacity: 0.3,
                            width: 1
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab"
                            }
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 0.5
                                }
                            }
                        }
                    }
                }}
            />
            {children}
        </div>
    );
};

export default ParticleBackground;
