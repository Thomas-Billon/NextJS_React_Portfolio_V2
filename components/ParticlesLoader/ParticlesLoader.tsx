'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { loadFull } from 'tsparticles';
import { loadSlim } from '@tsparticles/slim';
import { Engine, Container, ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import './ParticlesLoader.scss';


export interface ParticlesLoaderProps extends ISourceOptions {}

const ParticlesLoader = ({ className, props }: { className: string, props: ParticlesLoaderProps }): React.ReactNode => {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            //await loadFull(engine);
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container) => {};

    const options: ParticlesLoaderProps = useMemo(() => (props), [props]);

    return (
        init ?
            <Particles className={ className + ' full overlap' } options={options} particlesLoaded={particlesLoaded} />
        : <></>
    );
};

export default ParticlesLoader;