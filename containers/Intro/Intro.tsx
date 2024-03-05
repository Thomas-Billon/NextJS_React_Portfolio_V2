import React from 'react';
import ParticlesLoader from '@/components/ParticlesLoader/ParticlesLoader';
import CanvasLoader from '@/components/CanvasLoader/CanvasLoader';
import ModelLoader from '@/components/ModelLoader/ModelLoader';
import IntroHeadline from '@/components/IntroHeadline/IntroHeadline';
import { introProps as props } from './IntroProps';

import './Intro.scss';


const Intro = (): React.ReactNode => {
    return(
        <section id="intro" className="page overflow-hidden bg-[url('/static/images/intro/background_intro.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
            <div id="explosion-center" className={ 'absolute bottom-0 -translate-x-1/2 h-[3600px] opacity-80 bg-[url("/static/images/intro/splash_1.png")] bg-contain bg-bottom bg-no-repeat landscape:left-[60%] portrait:left-1/2' }></div>
            <div id="explosion-corner" className={ 'absolute top-0 left-0 h-[1200px] opacity-80 bg-[url("/static/images/intro/splash_2.png")] bg-contain bg-top bg-no-repeat ' }></div>
            <ParticlesLoader className="z-10" { ...{ props: props.particlesProps }} />
            <IntroHeadline className="z-20" headlineStyle="shadow" sublineStyle="transparent" dataNoSnippet={true} />
            <IntroHeadline className="z-30" headlineStyle="full" sublineStyle="transparent" dataNoSnippet={true} />
            <CanvasLoader className="z-40" { ...{ props: props.canvasProps }}>
                {
                    props.modelProps.map((model, index) => 
                        <ModelLoader key={index} { ...model} />
                    )
                }
            </CanvasLoader>
            <IntroHeadline className="z-50" headlineStyle="outline" />
        </section>
    );
};

export default Intro;