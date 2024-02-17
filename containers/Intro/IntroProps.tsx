import { CanvasLoaderProps } from '@/components/CanvasLoader/CanvasLoader';
import { ModelLoaderProps } from '@/components/ModelLoader/ModelLoader';
import { ParticlesLoaderProps } from '@/components/ParticlesLoader/ParticlesLoader';

import Variables from '@/styles/scss/variables.module.scss';


export interface IntroProps {
    canvasProps: CanvasLoaderProps;
    modelProps: ModelLoaderProps[];
    particlesProps: ParticlesLoaderProps;
}

const canvasProps: CanvasLoaderProps = {
    isCameraSpin: true,
    ambientColor: Variables.orangeLight,
    mobileOffsetX: 0,
    mobileOffsetY: 15,
    desktopOffsetX: 10,
    desktopOffsetY: 15
};

const originPosition: [x: number, y: number, z:number] = [0, -1, 0];
const originRotation: [x: number, y: number, z:number] = [0, 0, 0];

const modelProps: ModelLoaderProps[] = [
    { model: 'gameboy', scale: 0.1, originPosition: originPosition, targetPosition: [-1.8, -1, -1.2], originRotation: originRotation, targetRotation: [-1.5, 0.2, 0.5] },
    { model: 'controller', scale: 0.035, originPosition: originPosition, targetPosition: [1, 1.5, -2], originRotation: originRotation, targetRotation: [-1, 0.25, -0.5] },
    { model: 'cat', scale: 0.004, originPosition: originPosition, targetPosition: [0.8, -0.8, 2], originRotation: [-1, 0, 0], targetRotation: [-1.6, 0, -1.4] },
    { model: 'coffee', scale: 1, originPosition: originPosition, targetPosition: [0.25, -0.4, -0.1], originRotation: originRotation, targetRotation: [0.2, 0, -0.4] },
    { model: 'burger', scale: 0.1, originPosition: originPosition, targetPosition: [-2.2, -0.4, 0.2], originRotation: originRotation, targetRotation: [0.3, 0, 0.5] },
    { model: 'computer', scale: 0.0075, originPosition: originPosition, targetPosition: [1.5, 0, 0], originRotation: originRotation, targetRotation: [0.15, 0.1, -0.1] },
    { model: 'monitor', scale: 0.0065, originPosition: originPosition, targetPosition: [-1, 0.5, -1], originRotation: originRotation, targetRotation: [-0.25, 0.2, 0.15] },
    { model: 'mouse', scale: 0.01, originPosition: originPosition, targetPosition: [2.25, 2, 0.5], originRotation: originRotation, targetRotation: [1.25, 0.6, 0.25] },
    { model: 'keyboard', scale: 0.006, originPosition: originPosition, targetPosition: [-0.75, -1.25, 0.5], originRotation: originRotation, targetRotation: [0.25, -0.1, -0.1] },
    { model: 'ramen', scale: 1, originPosition: originPosition, targetPosition: [-0.15, -0.2, -2], originRotation: originRotation, targetRotation: [-0.5, 0.1, 0.25] }
];

const particlesProps: ParticlesLoaderProps = {
    fullScreen: { enable: false },
    interactivity: {
        events: {
            onClick: { enable: true, mode: 'repulse' },
            onHover: { enable: true, mode: 'repulse' },
            resize: { enable: true }
        },
        modes: {
            repulse: { distance: 200, duration: 0.8, easing: 'ease-in-out-sine', factor: 3, speed: 3, maxSpeed: 10 }
        },
        detectsOn: 'window',
    },
    particles: {
        collisions: { overlap: { enable: true }},
        color: { value: [Variables.yellow, Variables.orangeDark] },
        move: { enable: true, random: true, direction: 'none', speed: { min: 2, max: 6 }, outModes: { default: 'out' }},
        number: { value: 120 },
        opacity: { value: { min: 0.25, max: 0.95 }, animation: { enable: true, mode: 'random', startValue: 'random', speed: { min: 0.1, max: 0.5 }}},
        shadow: { enable: true, color: Variables.orangeLight, blur: 2.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 }, animation: { enable: true, mode: 'random', startValue: 'random', speed: 2 }},
        reduceDuplicates: true
    },
    autoPlay: true,
    detectRetina: true,
    fpsLimit: 60,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true
};

export const introProps: IntroProps = {
    canvasProps: canvasProps,
    modelProps: modelProps,
    particlesProps: particlesProps
}