'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { loadFull } from 'tsparticles';
import { loadSlim } from '@tsparticles/slim';
import { Engine, Container, ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';

export interface ParticlesProps {

}

const ParticlesLoader = (): React.ReactNode => {
    // Initialize particles
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            //await loadFull(engine);
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // TODO: Handle particles loaded event
    const particlesLoaded = async (container?: Container) => {};

    const options: ISourceOptions = useMemo(() => ({
        fullScreen: {
            enable: false
        },
        background: {
            color: {
                value: ''
            }
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: {
                    enable: true
                }
            },
            modes: {
                push: {
                    quantity: 90
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: '#FFFFFF'
            },
            links: {
                color: '#FFFFFF',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2
            },
            collisions: {
                enable: true
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false
            },
            number: {
                density: {
                    enable: true
                },
                value: 200
            },
            opacity: {
                value: 1
            },
            shape: {
                type: 'circle'
            },
            size: {
                value: {
                    min: 2,
                    max: 5
                }
            }
        },
        detectRetina: true
    }), []);

    if (init) {
        return (
            <Particles
                className="page"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
}

export default ParticlesLoader;