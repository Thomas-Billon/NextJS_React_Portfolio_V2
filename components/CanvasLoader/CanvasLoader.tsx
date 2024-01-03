'use client';

import React, { useState, useRef, createContext, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, CameraControls, Preload } from '@react-three/drei';
import { Group, Vector3 } from 'three';
import { MouseButtonAction } from '@/utils/MouseButtonAction';

export interface CanvasLoaderProps {
    ambientColor: string;
    mobileScale: number;
    mobileOffsetX: number;
    mobileOffsetY: number;
    desktopScale: number;
    desktopOffsetX: number;
    desktopOffsetY: number;
}

const CanvasLoader = ({children, props}: {children: React.ReactNode, props: CanvasLoaderProps}): React.ReactNode => {
    return (
        <Canvas gl={{ preserveDrawingBuffer: true }} >
            <CanvasContainer {...{props: props}}>
                {children}
            </CanvasContainer>
        </Canvas>
    );
}

export const CanvasContext = createContext({ratio: 1});

const CanvasContainer = ({children, props}: {children: React.ReactNode, props: CanvasLoaderProps}): React.ReactNode => {
    // Store refs
    const groupRef = useRef<Group>();
    const controlRef = useRef<CameraControls>();
    
    const { viewport } = useThree();

    // Calculate scaling ratio
    const isMobile = useMediaQuery({query: '(orientation: portrait)'})
    const mobileRatio: number = Math.max(1.2, Math.min(3.2, viewport.width * props.mobileScale));
    const desktopRatio: number = Math.max(3.2, Math.min(4, viewport.width * props.desktopScale));
    const ratio: number = isMobile ? mobileRatio : desktopRatio;

    // Calculate offset
    const offsetX: number = -viewport.height * (isMobile ? props.mobileOffsetX : props.desktopOffsetX);
    const offsetY: number = -viewport.height / 2 + viewport.height * (isMobile ? props.mobileOffsetY : props.desktopOffsetY);
    
    // Setup camera position to avoid reset on scroll / resize
    const [cameraPos, setCameraPos] = useState(new Vector3(0, 0, 50));

    // Animate auto rotation and define camera offset on large screens
    useFrame((_, delta) => {
        controlRef.current!.setFocalOffset(offsetX, 0, 0, false);
        groupRef.current!.rotation.y += 0.1 * delta;
    });

    return (
        <CanvasContext.Provider value={{ratio: ratio}}>
            <PerspectiveCamera
                makeDefault
                position={cameraPos}
                fov={25}
            />
            <CameraControls
                ref={controlRef as React.RefObject<CameraControls>}
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
            <group
                ref={groupRef as React.RefObject<Group>}
                scale={ratio}
                position={[0, offsetY, 0]}
            >
                {children}
            </group>
            <Preload all />
        </CanvasContext.Provider>
    );
}

export default CanvasLoader;