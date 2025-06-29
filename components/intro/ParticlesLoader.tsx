'use client';

import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { Engine, Container, ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';


export interface ParticlesLoaderProps extends ISourceOptions {}

const ParticlesLoader = ({ className = '', props = {}}: Props<ParticlesLoaderProps>): ReactNode => {
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
            <Particles className={styles.ParticlesStyle({ className })} options={options} particlesLoaded={particlesLoaded} />
        :
            <></>
    );
};

export default ParticlesLoader;


const styles = tw({
    ParticlesStyle: ({ className }: {
        className?: string
    }) => [
        className ?? '',
        'full',
        'overlap'
    ]
});
