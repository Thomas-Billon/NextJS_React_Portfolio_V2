import React from 'react';
import ParticlesLoader from '@/components/ParticlesLoader/ParticlesLoader';
import CanvasLoader from '@/components/CanvasLoader/CanvasLoader';
import ModelLoader from '@/components/ModelLoader/ModelLoader';
import { CanvasLoaderProps } from '@/components/CanvasLoader/CanvasLoader';
import { ModelLoaderProps } from '@/components/ModelLoader/ModelLoader';

import Variables from '@/styles/scss/variables.module.scss';
import '@/styles/scss/intro.scss';
import IntroHeadline from '@/components/IntroHeadline/IntroHeadline';

export const canvas: CanvasLoaderProps = {
    ambientColor: Variables.primaryColor,
    mobileScale: 0.167,
    mobileOffsetX: 0,
    mobileOffsetY: -0.125,
    desktopScale: 0.125,
    desktopOffsetX: 0.2,
    desktopOffsetY: -0.125
}

const originPosition: [x: number, y: number, z:number] = [0, -1, 0];
const originRotation: [x: number, y: number, z:number] = [0, 0, 0];

export const models: ModelLoaderProps[] = [{
    model: "gameboy",
    scale: 0.1,
    originPosition: originPosition,
    targetPosition: [-1.8, -1, -1.2],
    originRotation: originRotation,
    targetRotation: [-1.5, 0.2, 0.5]
}, {
    model: "controller",
    scale: 0.035,
    originPosition: originPosition,
    targetPosition: [1, 1.5, -2],
    originRotation: originRotation,
    targetRotation: [-1, 0.25, -0.5]
}, {
    model: "cat",
    scale: 0.004,
    originPosition: originPosition,
    targetPosition: [0.8, -0.8, 2],
    originRotation: [-1, 0, 0],
    targetRotation: [-1.6, 0, -1.4]
}, {
    model: "coffee",
    scale: 1,
    originPosition: originPosition,
    targetPosition: [0.25, -0.4, -0.1],
    originRotation: originRotation,
    targetRotation: [0.2, 0, -0.4]
}, {
    model: "burger",
    scale: 0.1,
    originPosition: originPosition,
    targetPosition: [-2.2, -0.4, 0.2],
    originRotation: originRotation,
    targetRotation: [0.3, 0, 0.5]
}, {
    model: "computer",
    scale: 0.0075,
    originPosition: originPosition,
    targetPosition: [1.5, 0, 0],
    originRotation: originRotation,
    targetRotation: [0.15, 0.1, -0.1]
}, {
    model: "monitor",
    scale: 0.0065,
    originPosition: originPosition,
    targetPosition: [-1, 0.5, -1],
    originRotation: originRotation,
    targetRotation: [-0.25, 0.2, 0.15]
}, {
    model: "mouse",
    scale: 0.01,
    originPosition: originPosition,
    targetPosition: [2.25, 2, 0.5],
    originRotation: originRotation,
    targetRotation: [1.25, 0.6, 0.25]
}, {
    model: "keyboard",
    scale: 0.006,
    originPosition: originPosition,
    targetPosition: [-0.75, -1.25, 0.5],
    originRotation: originRotation,
    targetRotation: [0.25, -0.1, -0.1]
}, {
    model: "ramen",
    scale: 1,
    originPosition: originPosition,
    targetPosition: [-0.15, -0.2, -2],
    originRotation: originRotation,
    targetRotation: [-0.5, 0.1, 0.25]
}];

const Intro = (): React.ReactNode => {
    return(
        <section id="intro" className="page">
            <div className="full overlap z-10">
                <ParticlesLoader/>
            </div>
            <IntroHeadline className="z-20" classNameText='text-headline-shadow' display={false} />
            <IntroHeadline className="z-30" classNameText='text-headline-full' classNameDetails='glitch-text' />
            <div className="full overlap z-40">
                <CanvasLoader {...{props: canvas}}>
                    {
                        models.map((model, index) => 
                            <ModelLoader key={index} {...model}></ModelLoader>
                        )
                    }
                </CanvasLoader>
            </div>
            <IntroHeadline className="z-50" classNameText='text-headline-outline' display={false}/>
        </section>
    );
}

export default Intro;