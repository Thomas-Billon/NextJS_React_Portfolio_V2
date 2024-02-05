import React from 'react';
import ParticlesLoader from '@/components/ParticlesLoader/ParticlesLoader';
import CanvasLoader from '@/components/CanvasLoader/CanvasLoader';
import ModelLoader from '@/components/ModelLoader/ModelLoader';
import IntroHeadline from '@/components/IntroHeadline/IntroHeadline';
import { canvasConfig, modelConfig, particlesConfig } from '@/Config';

import '@/styles/scss/intro.scss';


const Intro = (): React.ReactNode => {
    return(
        <section id="intro">
            <div id="explosion-center"></div>
            <div id="explosion-corner"></div>
            <ParticlesLoader className="z-10" {...{ props: particlesConfig }} />
            <IntroHeadline className="z-20" classNameHeadline="intro-headline-text-shadow" classNameSubline="intro-subline-text-hidden" dataNoSnippet={true} />
            <IntroHeadline className="z-30" classNameHeadline="intro-headline-text-full" classNameSubline="intro-subline-text-hidden" dataNoSnippet={true} />
            <CanvasLoader className="z-40" {...{ props: canvasConfig }}>
                {
                    modelConfig.map((model, index) => 
                        <ModelLoader key={index} {...model}></ModelLoader>
                    )
                }
            </CanvasLoader>
            <IntroHeadline className="z-50" classNameHeadline="intro-headline-text-outline" />
        </section>
    );
};

export default Intro;