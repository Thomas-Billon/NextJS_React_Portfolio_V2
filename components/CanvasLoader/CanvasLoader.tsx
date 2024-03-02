'use client';

import React, { useState, useRef, createContext, TouchEvent, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, CameraControls, Preload } from '@react-three/drei';
import { Group, Vector3 } from 'three';
import { MouseButtonAction } from '@/utils/Three/MouseButtonAction';
import tailwindConfig from '@/tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';

import Variables from '@/styles/scss/variables.module.scss';
import './CanvasLoader.scss';


export interface CanvasLoaderProps {
    isCameraSpin: boolean;
    ambientColor: string;
    mobileOffsetX: number;
    mobileOffsetY: number;
    desktopOffsetX: number;
    desktopOffsetY: number;
}

const CanvasLoader = ({ children, className, props }: { children: React.ReactNode, className:string, props: CanvasLoaderProps }): React.ReactNode => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [touchPosition, setTouchPosition] = useState(0);

    useEffect(() => {
        setScrollPosition(window.scrollY);
    }, []);

    const onTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
        setScrollPosition(window.scrollY);
        setTouchPosition(event.touches[0]?.clientY);
    }

    const onTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
        const diff = event.touches[0]?.clientY - touchPosition;

        window.scrollTo(0, scrollPosition - diff);
    }

    const onTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
        setScrollPosition(window.scrollY);
    }

    return (
        <Canvas id="threejs" className={className} gl={{ preserveDrawingBuffer: true }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <CanvasContainer { ...{ props: props }}>
                {children}
            </CanvasContainer>
        </Canvas>
    );
};

export const CanvasContext = createContext({ isMobile: false, ratio: 1 });

const CanvasContainer = ({ children, props }: { children: React.ReactNode, props: CanvasLoaderProps }): React.ReactNode => {
    // Store refs
    const groupRef = useRef<Group>();
    const controlRef = useRef<CameraControls>();
    
    const { viewport } = useThree();

    // Calculate scaling ratio
    const breakpoints: Record<string, string> = resolveConfig(tailwindConfig).theme.screens;
    const isScreen2Xl: boolean = useMediaQuery({ query: `(min-width: ${breakpoints['2xl']})` });
    const isScreenXl: boolean = useMediaQuery({ query: `(min-width: ${breakpoints['xl']})` });
    const isScreenLg: boolean = useMediaQuery({ query: `(min-width: ${breakpoints['lg']})` });
    const isScreenMd: boolean = useMediaQuery({ query: `(min-width: ${breakpoints['md']})` });
    const isScreenSm: boolean = useMediaQuery({ query: `(min-width: ${breakpoints['sm']})` });
    const ratio: number = isScreen2Xl ? parseFloat(Variables.scaleRatio2Xl)
        : isScreenXl ? parseFloat(Variables.scaleRatioXl)
        : isScreenLg ? parseFloat(Variables.scaleRatioLg)
        : isScreenMd ? parseFloat(Variables.scaleRatioMd)
        : isScreenSm ? parseFloat(Variables.scaleRatioSm)
        : parseFloat(Variables.scaleRatioXs);

    // Calculate offset
    const isMobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
    const offsetX: number = -viewport.width * ((isMobile ? props.mobileOffsetX : props.desktopOffsetX) / 100);
    const offsetY: number = -viewport.height / 2 + -viewport.height * ((isMobile ? props.mobileOffsetY : props.desktopOffsetY) / 100);
    
    // Setup camera position to avoid reset on scroll / resize
    const [cameraPos, setCameraPos] = useState<Vector3>(new Vector3(0, 0, 50));

    // Animate auto rotation and define camera offset on large screens
    useFrame((_, delta) => {
        controlRef.current!.setFocalOffset(offsetX, 0, 0, false);

        if (props.isCameraSpin) {
            groupRef.current!.rotation.y += 0.1 * delta;
        }
    });

    return (
        <CanvasContext.Provider value={{ isMobile: isMobile, ratio: ratio }}>
            <PerspectiveCamera makeDefault position={cameraPos} fov={25} />
            <CameraControls
                ref={controlRef as React.RefObject<CameraControls>}
                mouseButtons={{ left: MouseButtonAction.ROTATE, right: MouseButtonAction.NONE, wheel: MouseButtonAction.NONE, middle: MouseButtonAction.NONE }}
                touches={{ one: MouseButtonAction.TOUCH_ROTATE, two: MouseButtonAction.NONE, three: MouseButtonAction.NONE }}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
            <directionalLight intensity={2} position={[10, 10, 10]} />
            <directionalLight intensity={2} position={[10, 10, -10]} />
            <directionalLight intensity={2} position={[-10, 10, 10]} />
            <directionalLight intensity={2} position={[-10, 10, -10]} />
            <directionalLight intensity={1} position={[0, -10, 0]} />
            <ambientLight intensity={1.5} position={[0, 0, 0]} color={props.ambientColor} />
            <group ref={groupRef as React.RefObject<Group>} position={[0, offsetY, 0]} rotation={[0, 0, 0]} scale={ratio}>
                {children}
            </group>
            <Preload all />
        </CanvasContext.Provider>
    );
};

export default CanvasLoader;