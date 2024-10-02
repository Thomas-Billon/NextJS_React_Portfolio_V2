'use client';

import React, { useState, useRef, RefObject } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, Center, useFBO } from '@react-three/drei';
import { Mesh, Vector3, Euler, MeshBasicMaterial, TextureLoader } from 'three';
import { Props } from '@/utils/react/Props';
import { SceneContext } from '@/components/intro/three/SceneLoader';
import { useCustomContext } from '@/hooks/UseCustomContext';
import '@/utils/three/EulerSlerp';


export interface ModelLoaderProps {
    model?: string;
    scale?: number;
    originPosition?: [x: number, y: number, z:number];
    targetPosition?: [x: number, y: number, z:number];
    originRotation?: [x: number, y: number, z:number];
    targetRotation?: [x: number, y: number, z:number];
}

const ModelLoader = ({ props = {}}: Props<ModelLoaderProps>): React.ReactNode => {
    // Grab context
    const sceneContext = useCustomContext(SceneContext);

    // Store refs
    const meshRef = useRef<Mesh>();
    const renderMeshRef = useRef<Mesh>();
    const renderMaterialRef = useRef<MeshBasicMaterial>();

    const { viewport } = useThree();

    // Load mesh from GLB file
    const mesh = useGLTF(`./static/models/${props.model}.glb`);

    // Setup render texture
    const renderTarget = useFBO();
    const backgroundTexture = useLoader(TextureLoader, './static/images/intro/background_monitor_' + (sceneContext.isMobile ? 'center' : 'offset') + '.jpg');

    // Setup current positions and rotations
    const [currentPos, setCurrentPos] = useState<Vector3>(new Vector3(props.originPosition?.[0], props.originPosition?.[1], props.originPosition?.[2]));
    const [currentRot, setCurrentRot] = useState<Euler>(new Euler(props.originRotation?.[0], props.originRotation?.[1], props.originRotation?.[2]));

    // Setup target positions and rotations
    const targetPos: Vector3 = new Vector3(props.targetPosition?.[0], (props.targetPosition?.[1] ?? 0) + (viewport.height / sceneContext.ratio / 2), props.targetPosition?.[2]);
    const targetRot: Euler = new Euler(props.targetRotation?.[0], props.targetRotation?.[1], props.targetRotation?.[2]);

    // Animate mesh at the beginning, then once target is reached disable animation
    const [animated, setAnimated] = useState<boolean>(true);
    useFrame((state) => {
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

        // Render texture on plane mesh
        if (renderMeshRef.current) {
            const { gl, scene, camera } = state;

            // Switch render target mesh visibility to avoid recursive calls
            renderMeshRef.current!.visible = false;

            gl.setRenderTarget(renderTarget);
            gl.render(scene, camera);

            renderMaterialRef.current!.map = renderTarget.texture;
            renderMaterialRef.current!.alphaMap = renderTarget.texture;

            gl.setRenderTarget(null);

            renderMeshRef.current!.visible = true;
        }
    });

    return (
        <mesh ref={meshRef as RefObject<Mesh>} position={currentPos} rotation={currentRot} scale={props.scale}>
            <Center>
                <primitive object={mesh.scene} />
                {
                    // Add plane mesh for monitor screen
                    (props.model == 'monitor') &&
                    <group>
                        <mesh
                            position={[0, 170.5, 1]}
                            rotation={[0, 0, 0]}
                            scale={[364, 202, 1]}
                        >
                            <planeGeometry/>
                            <meshBasicMaterial map={backgroundTexture} />
                        </mesh>
                        <mesh
                            ref={renderMeshRef as RefObject<Mesh>}
                            position={[0, 170.5, 2]}
                            rotation={[0, 0, 0]}
                            scale={[(viewport.width * 9.2 < 364) ? viewport.width * 9.2 : 364, viewport.height * 9.2, 1]}
                        >
                            <planeGeometry/>
                            <meshBasicMaterial ref={renderMaterialRef as RefObject<MeshBasicMaterial>} alphaTest={0.001} />
                        </mesh>
                    </group>
                }
            </Center>
        </mesh>
    );
};

export default ModelLoader;
