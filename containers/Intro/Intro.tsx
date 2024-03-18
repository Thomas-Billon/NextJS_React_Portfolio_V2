// use server

import React, { ReactNode } from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import ParticlesLoader from '@/components/ParticlesLoader';
import CanvasLoader from '@/components/CanvasLoader';
import ModelLoader from '@/components/ModelLoader';
import IntroHeadline from '@/components/IntroHeadline';
import { introProps as props } from './IntroProps';

import './Intro.scss';


const Intro = (): ReactNode => {
    return(
        <section id="intro" className={IntroStyle}>
            <div id="explosion-center" className={ExplosionCenterStyle}></div>
            <div id="explosion-corner" className={ExplosionCornerStyle}></div>
            <ParticlesLoader className="z-10" { ...{ props: props.particlesProps }} />
            <IntroHeadline className="z-20" mainlineStyle="shadow" sublineStyle="transparent" dataNoSnippet={true} />
            <IntroHeadline className="z-30" mainlineStyle="full" sublineStyle="transparent" dataNoSnippet={true} />
            <CanvasLoader className="z-40" { ...{ props: props.canvasProps }}>
                {
                    props.modelProps.map((model, index) => 
                        <ModelLoader key={index} { ...{ props: model }} />
                    )
                }
            </CanvasLoader>
            <IntroHeadline className="z-50" mainlineStyle="outline" />
        </section>
    );
};

export default Intro;


const IntroStyle = tw([
    'IntroStyle',
    'page',
    'overflow-hidden',
    'bg-[url("/static/images/intro/background_intro.jpg")]',
    'bg-fixed',
    'bg-cover',
    'bg-center',
    'bg-no-repeat'
]);

const ExplosionCenterStyle = tw([
    'ExplosionCenterStyle',
    'absolute',
    'bottom-0',
    '-translate-x-1/2',
    'h-[3600px]',
    'opacity-80',
    'bg-[url("/static/images/intro/splash_1.png")]',
    'bg-contain',
    'bg-bottom',
    'bg-no-repeat',
    'landscape:left-[60%]',
    'portrait:left-1/2'
]);

const ExplosionCornerStyle = tw([
    'ExplosionCornerStyle',
    'absolute',
    'top-0',
    'left-0',
    'h-[1200px]',
    'opacity-80',
    'bg-[url("/static/images/intro/splash_2.png")]',
    'bg-contain',
    'bg-top',
    'bg-no-repeat'
]);