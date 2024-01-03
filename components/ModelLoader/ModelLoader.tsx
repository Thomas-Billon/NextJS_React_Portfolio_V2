'use client';

import React, { useState, useRef, useMemo, useContext } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import { Mesh, Vector3, Euler, Quaternion, MeshBasicMaterial, BoxGeometry } from 'three';
import { CanvasContext } from '@/components/CanvasLoader/CanvasLoader';

export interface ModelLoaderProps {
    model: string;
    scale: number;
    originPosition: [x: number, y: number, z:number];
    targetPosition: [x: number, y: number, z:number];
    originRotation: [x: number, y: number, z:number];
    targetRotation: [x: number, y: number, z:number];
}

const ModelLoader = (props: ModelLoaderProps): React.ReactNode => {
    // Grab context
    const canvasContext = useContext(CanvasContext);

    // Store refs
    const meshRef = useRef<Mesh>();

    const { viewport } = useThree();

    // Load mesh from GLB file
    const mesh = useGLTF(`./static/models/${props.model}.glb`);

    // Setup current positions and rotations
    const [currentPos, setCurrentPos] = useState(new Vector3(props.originPosition[0], props.originPosition[1], props.originPosition[2]));
    const [currentRot, setCurrentRot] = useState(new Euler(props.originRotation[0], props.originRotation[1], props.originRotation[2]));

    // Setup target positions and rotations
    const targetPos: Vector3 = new Vector3(props.targetPosition[0], props.targetPosition[1] + (viewport.height / canvasContext.ratio / 2), props.targetPosition[2]);
    const targetRot: Euler = new Euler(props.targetRotation[0], props.targetRotation[1], props.targetRotation[2]);

    // Animate mesh at the beginning, then once target is reached disable animation
    const [animated, setAnimated] = useState(true);
    useFrame(() => {
        if (animated) {
            meshRef.current!.position.lerp(targetPos, 0.1);
            meshRef.current!.rotation.slerp(targetRot, 0.1);
        }
        else {
            meshRef.current!.position.set(targetPos.x, targetPos.y, targetPos.z);
            meshRef.current!.rotation.set(targetRot.x, targetRot.y, targetRot.z);
        }
        
        // Check if position still hasn't reached target with a difference of at least 10^(-3)
        // Check only for position since rotation can be completely different after Quaternion convertion in slerp method
        if (targetPos.x - 0.001 < meshRef.current!.position.x && meshRef.current!.position.x < targetPos.x + 0.001 &&
            targetPos.y - 0.001 < meshRef.current!.position.y && meshRef.current!.position.y < targetPos.y + 0.001 &&
            targetPos.z - 0.001 < meshRef.current!.position.z && meshRef.current!.position.z < targetPos.z + 0.001) {
            setAnimated(false);
        }
    });

    return (
        <mesh
            ref={meshRef as React.RefObject<Mesh>}
            scale={props.scale}
            position={currentPos}
            rotation={currentRot}
        >
            <Center>
                <primitive object={mesh.scene} />
            </Center>
        </mesh>
    );
}

// Extend Euler class to include slerp method
declare module 'three' {
    interface Euler {
        slerp(e: Euler, a: number): void
    }
}

// Convert temporarily Euler to Quaternion to make use of slerp and to avoid gimbal lock <- IMPORTANT
Euler.prototype.slerp = function (e: Euler, a: number): void {
    const qStart = new Quaternion().setFromEuler(this);
    const qEnd = new Quaternion().setFromEuler(e);

    qStart.slerp(qEnd, a);

    this.setFromQuaternion(qStart);
}

export default ModelLoader;