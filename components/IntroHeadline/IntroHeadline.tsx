import React from 'react';
import { Roboto } from 'next/font/google';
import GlitchText from '@/components/GlitchText/GlitchText';

import './IntroHeadline.scss';


const roboto = Roboto({
    weight: ['700'],
    subsets: ['latin']
});

export interface IntroHeadlineProps {
    className?: string;
    classNameHeadline?: string;
    classNameSubline?: string;
    dataNoSnippet?: boolean;
    isTextGlitched?: boolean;
}

const IntroHeadline = ({ className= '', classNameHeadline = '', classNameSubline = '', dataNoSnippet = false, isTextGlitched = false }: IntroHeadlineProps): React.ReactNode => {
    return (
        <div className={['intro-headline-container', className].join(' ')} {...(dataNoSnippet ? { 'data-nosnippet': true } : {})}>
            <div className={[classNameHeadline, roboto.className].join(' ')}>
                Hi, I&apos;m <GlitchText isEnabled={isTextGlitched}>Thomas</GlitchText>
            </div>
            <div className={['intro-subline-text', classNameSubline].join(' ')} {...(dataNoSnippet ? { 'data-nosnippet': true } : {})}>
                A full-stack developer with a passion for challenges and problem solving<br/>
                I also create video games during my spare time
            </div>
        </div>
    );
};

export default IntroHeadline;