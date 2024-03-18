'use client';

import React, { useState, useRef, createContext, RefObject } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, CameraControls, Preload } from '@react-three/drei';
import { Group, Vector3 } from 'three';
import { useBreakpoint } from '@/hooks/UseBreakpoint';
import { MouseButtonAction } from '@/utils/Three/MouseButtonAction';
import { Props } from '@/utils/React/Props';

import Variables from '@/styles/scss/variables.module.scss';


export interface SceneLoaderProps {
    isCameraSpin?: boolean;
    ambientColor?: string;
    mobileOffsetX?: number;
    mobileOffsetY?: number;
    desktopOffsetX?: number;
    desktopOffsetY?: number;
}

export const SceneContext = createContext({ isMobile: false, ratio: 1 });

const SceneLoader = ({ children, props = {} }: Props<SceneLoaderProps>): React.ReactNode => {
    // Store refs
    const groupRef = useRef<Group>();
    const controlRef = useRef<CameraControls>();
    
    const { viewport } = useThree();

    // Calculate scaling ratio
    const currentBreakpoint = useBreakpoint().toUpperCase();
    const ratio = (currentBreakpoint != '') ? parseFloat(Variables['scaleRatio' + currentBreakpoint]) : 1;

    // Calculate offset
    const isMobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
    const offsetX: number = -viewport.width * (((isMobile ? props.mobileOffsetX : props.desktopOffsetX) ?? 0) / 100);
    const offsetY: number = -viewport.height / 2 + -viewport.height * (((isMobile ? props.mobileOffsetY : props.desktopOffsetY) ?? 0) / 100);
    
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
        <SceneContext.Provider value={{ isMobile, ratio }}>
            <PerspectiveCamera makeDefault position={cameraPos} fov={25} />
            <CameraControls
                ref={controlRef as RefObject<CameraControls>}
                mouseButtons={{
                    left: MouseButtonAction.ROTATE,
                    right: MouseButtonAction.NONE,
                    wheel: MouseButtonAction.NONE,
                    middle: MouseButtonAction.NONE
                }}
                touches={{
                    one: MouseButtonAction.TOUCH_ROTATE,
                    two: MouseButtonAction.NONE,
                    three: MouseButtonAction.NONE
                }}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
            <directionalLight intensity={2} position={[10, 10, 10]} />
            <directionalLight intensity={2} position={[10, 10, -10]} />
            <directionalLight intensity={2} position={[-10, 10, 10]} />
            <directionalLight intensity={2} position={[-10, 10, -10]} />
            <directionalLight intensity={1} position={[0, -10, 0]} />
            <ambientLight intensity={1.5} position={[0, 0, 0]} color={props.ambientColor} />
            <group ref={groupRef as RefObject<Group>} position={[0, offsetY, 0]} rotation={[0, 0, 0]} scale={ratio}>
                {children}
            </group>
            <Preload all />
        </SceneContext.Provider>
    );
};

export default SceneLoader;