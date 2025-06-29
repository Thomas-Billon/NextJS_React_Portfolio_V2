'use client';

import React, { useState, TouchEvent, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import SceneLoader, { SceneLoaderProps } from '@/components/intro/three/SceneLoader';


export interface CanvasLoaderProps extends SceneLoaderProps {}

const CanvasLoader = ({ children, className = '', props = {}}: Props<SceneLoaderProps>): React.ReactNode => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [touchPosition, setTouchPosition] = useState<number>(0);

    // Custom scroll for mobile as canvas stops event propagation
    useEffect(() => {
        setScrollPosition(window.scrollY);
    }, []);

    const onTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
        setScrollPosition(window.scrollY);
        setTouchPosition(event.touches[0]?.clientY);
    };

    const onTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
        const diff = event.touches[0]?.clientY - touchPosition;

        window.scrollTo(0, scrollPosition - diff);
    };

    const onTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
        setScrollPosition(window.scrollY);
    };

    return (
        <Canvas id="threejs" className={styles.ThreeCanvasStyle({ className })}
            gl={{ preserveDrawingBuffer: true }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <SceneLoader {...{ props: props }}>
                {children}
            </SceneLoader>
        </Canvas>
    );
};

export default CanvasLoader;


const styles = tw({
    ThreeCanvasStyle: ({ className }: {
        className?: string
    }) => [
        className ?? '',
        '!absolute',
        'top-0'
    ]   
});
