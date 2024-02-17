import React from 'react';
import { Roboto } from 'next/font/google';

import './IntroHeadline.scss';


// If I remove this variable, the corresponding css gets removed on build...
// Seriously, wtf is this happening to me?
const classes: string[] = ['intro-headline-text-shadow', 'intro-headline-text-full', 'intro-headline-text-outline', 'intro-headline-subline-hidden']

const roboto = Roboto({
    weight: ['700'],
    subsets: ['latin']
});

export interface IntroHeadlineProps {
    className?: string;
    classNameHeadline?: string;
    classNameSubline?: string;
    dataNoSnippet?: boolean;
}

const IntroHeadline = ({ className= '', classNameHeadline = '', classNameSubline = '', dataNoSnippet = false }: IntroHeadlineProps): React.ReactNode => {
    return (
        <div className={['intro-headline', className].join(' ')}>
            <div className={['intro-headline-text', classNameHeadline, roboto.className].join(' ')} { ...(dataNoSnippet ? { 'data-nosnippet': true } : {})}>
                Hi, I&apos;m Thomas
            </div>
            <div className={['intro-headline-subline', classNameSubline].join(' ')} { ...(dataNoSnippet ? { 'data-nosnippet': true } : {})}>
                A full-stack developer with a passion for challenges and problem solving<br/>
                I also create video games during my spare time
            </div>
        </div>
    );
};

export default IntroHeadline;