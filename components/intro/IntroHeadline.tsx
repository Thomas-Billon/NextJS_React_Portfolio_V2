// use server

import React, { ReactNode } from 'react';
import { Props } from '@/utils/react/Props';
import { Raleway } from 'next/font/google';
import DynamicTag from '@/components/shared/DynamicTag';
import { tw } from '@/utils/tailwind/TinyWind';


const raleway = Raleway({
    weight: ['700'],
    subsets: ['latin']
});

export interface IntroHeadlineProps {
    mainlineStyle?: string;
    sublineStyle?: string;
    dataNoSnippet?: boolean;
}

const IntroHeadline = ({ className = '', mainlineStyle = '', sublineStyle = '', dataNoSnippet = false }: Props<IntroHeadlineProps>): ReactNode => {
    const isShadow: boolean = mainlineStyle == 'shadow';
    const isFull: boolean = mainlineStyle == 'full';
    const isOutline: boolean = mainlineStyle == 'outline';
    const isTransparent: boolean = sublineStyle == 'transparent';

    return (
        <div className={styles.IntroHeadlineStyle({ className })}>
            <DynamicTag
                className={styles.IntroMainlineStyle({ className: raleway.className, isShadow, isFull, isOutline })}
                tag={dataNoSnippet ? 'div' : 'h1'}
                dataNoSnippet={dataNoSnippet}
            >
                Hi, I&apos;m Thomas
            </DynamicTag>
            <div
                className={styles.IntroSublineStyle({ isTransparent })}
                {...(dataNoSnippet ? { 'data-nosnippet': true } : {})}
            >
                A full-stack developer with a passion for challenges and problem solving<br/>
                I also create video games during my spare time
            </div>
        </div>
    );
};

export default IntroHeadline;


const styles = tw({
    IntroHeadlineStyle: ({ className }: {
        className?: string
    }) => [
        className ?? '',
        'container',
        'center',
        'pointer-events-none',
        'select-none',
        'landscape:top-1/2',
        'landscape:text-left',
        'portrait:top-[30%]',
        'portrait:text-center'
    ],

    IntroMainlineStyle: ({ className, isShadow, isFull, isOutline }: {
        className?: string,
        isShadow: boolean,
        isFull: boolean,
        isOutline: boolean
    }) => [
        className ?? '',
        'w-full',
        'mb-4',
        'text-[3.5rem]',
        'sm:text-[4rem]',
        'md:text-[5rem]',
        'xl:text-[6rem]',
        'leading-[3.5rem]',
        'sm:leading-[4rem]',
        'md:leading-[5rem]',
        'xl:leading-[6rem]',
        'uppercase tracking-wide',
        isShadow && 'text-white',
        isShadow && 'drop-shadow-[0_1px_4px_rgba(255,255,255,1)]',
        isFull && 'text-white',
        isOutline && 'text-transparent',
        isOutline && 'text-stroke-md'
    ],

    IntroSublineStyle: ({ isTransparent }: {
        isTransparent: boolean
    }) => [
        'w-full',
        'text-white',
        'text-base',
        'md:text-lg',
        'font-normal',
        'overflow-hidden',
        'pointer-events-none',
        'select-none',
        isTransparent && 'opacity-0'
    ]
});
