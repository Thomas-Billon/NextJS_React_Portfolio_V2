import React from 'react';
import ParticlesLoader from '@/components/ParticlesLoader/ParticlesLoader';
import CanvasLoader from '@/components/CanvasLoader/CanvasLoader';
import ModelLoader from '@/components/ModelLoader/ModelLoader';
import IntroHeadline from '@/components/IntroHeadline/IntroHeadline';
import { introProps as props } from './IntroProps';

import './Intro.scss';


const Intro = (): React.ReactNode => {
    return(
        <section id="intro">
            <div id="explosion-center"></div>
            <div id="explosion-corner"></div>
            <ParticlesLoader className="z-10" { ...{ props: props.particlesProps }} />
            <IntroHeadline className="z-20" classNameHeadline="intro-headline-text-shadow" classNameSubline="intro-headline-subline-hidden" dataNoSnippet={true} />
            <IntroHeadline className="z-30" classNameHeadline="intro-headline-text-full" classNameSubline="intro-headline-subline-hidden" dataNoSnippet={true} />
            <CanvasLoader className="z-40" { ...{ props: props.canvasProps }}>
                {
                    props.modelProps.map((model, index) => 
                        <ModelLoader key={index} { ...model} />
                    )
                }
            </CanvasLoader>
            <IntroHeadline className="z-50" classNameHeadline="intro-headline-text-outline" />
        </section>
    );
};

export default Intro;