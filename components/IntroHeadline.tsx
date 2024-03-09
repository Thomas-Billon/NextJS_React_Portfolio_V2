import React, { ReactNode } from 'react';
import { Props } from '@/utils/React/Props';
import { Roboto } from 'next/font/google';
import DynamicTag from '@/components/DynamicTag';


const roboto = Roboto({
    weight: ['700'],
    subsets: ['latin']
});

export interface IntroHeadlineProps {
    headlineStyle?: string;
    sublineStyle?: string;
    dataNoSnippet?: boolean;
}

const IntroHeadline = ({ className = '', headlineStyle = '', sublineStyle = '', dataNoSnippet = false }: Props<IntroHeadlineProps>): ReactNode => {
    return (
        <div className={ className + ' container center pointer-events-none select-none landscape:top-1/2 landscape:text-left portrait:top-[30%] portrait:text-center' }>
            <DynamicTag className={
                (headlineStyle == 'shadow' ?
                    'text-white drop-shadow-[0_1px_4px_rgba(255,255,255,1)] '
                : headlineStyle == 'full' ?
                    'text-white '
                : headlineStyle == 'outline' ?
                    'text-transparent text-stroke-md '
                : '')
                + roboto.className + ' w-full mb-4 text-[3.5rem] sm:text-[4rem] md:text-[5rem] xl:text-[6rem] leading-[3.5rem] sm:leading-[4rem] md:leading-[5rem] xl:leading-[6rem] font-bold uppercase tracking-wide' }
                tag={dataNoSnippet ? 'div' : 'h1'}
                dataNoSnippet={dataNoSnippet}>
                    Hi, I&apos;m Thomas
            </DynamicTag>
            <div className={
                (sublineStyle == 'transparent' ?
                    'opacity-0 '
                : '')
                + 'w-full text-white text-base md:text-lg font-normal overflow-hidden pointer-events-none select-none' }
                { ...(dataNoSnippet ? { 'data-nosnippet': true } : {})}>
                    A full-stack developer with a passion for challenges and problem solving<br/>
                    I also create video games during my spare time
            </div>
        </div>
    );
};

export default IntroHeadline;