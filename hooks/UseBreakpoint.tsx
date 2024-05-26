import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/UseWindowSize';
import tailwindConfig from '@/tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';
import { BreakpointTypeEnum, BreakpointSizeEnum } from '@/utils/enums/BreakpointEnum';


export const useBreakpoint = (): { currentBreakpoint: string, currentBreakpointSize: number } => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>(BreakpointTypeEnum.Undefined);
    const [currentBreakpointSize, setCurrentBreakpointSize] = useState<number>(BreakpointSizeEnum.Undefined);

    // Runs each time window size is changed
    const size = useWindowSize();
    useEffect(() => {
        const screens: Record<string, string> = resolveConfig(tailwindConfig).theme.screens;
        const breakpoints: string[] = Object.keys(screens).reverse();

        let breakpoint: string = BreakpointTypeEnum.Undefined;
        let breakpointSize: number = BreakpointSizeEnum.Undefined;
        
        if (size.width) {
            breakpoint = BreakpointTypeEnum.Xs;
            breakpointSize = BreakpointSizeEnum.Xs;

            for (let i = 0; i < breakpoints.length; i++) {
                if ((size.width ?? 0) > parseFloat(screens[breakpoints[i]])) {
                    breakpoint = breakpoints[i];
                    breakpointSize = parseFloat(screens[breakpoints[i]]);
                    break;
                }
            }
        }

        setCurrentBreakpoint(breakpoint);
        setCurrentBreakpointSize(breakpointSize);

    }, [size]);

    return { currentBreakpoint, currentBreakpointSize };
}

export const isBreakpointXsDown = (): boolean => isBreakpointDown(BreakpointTypeEnum.Xs);
export const isBreakpointSmDown = (): boolean => isBreakpointDown(BreakpointTypeEnum.Sm);
export const isBreakpointMdDown = (): boolean => isBreakpointDown(BreakpointTypeEnum.Md);
export const isBreakpointLgDown = (): boolean => isBreakpointDown(BreakpointTypeEnum.Lg);
export const isBreakpointXlDown = (): boolean => isBreakpointDown(BreakpointTypeEnum.Xl);
export const isBreakpoint2XlDown = (): boolean => isBreakpointDown(BreakpointTypeEnum.Xxl);

const isBreakpointDown = (breakpoint: string): boolean => {
    const { currentBreakpointSize } = useBreakpoint();
    const screens: Record<string, string> = resolveConfig(tailwindConfig).theme.screens;

    if (currentBreakpointSize <= parseFloat(screens[breakpoint])) {
        return true;
    }
    return false;
}

export const isBreakpointXsUp = (): boolean => isBreakpointUp(BreakpointTypeEnum.Xs);
export const isBreakpointSmUp = (): boolean => isBreakpointUp(BreakpointTypeEnum.Sm);
export const isBreakpointMdUp = (): boolean => isBreakpointUp(BreakpointTypeEnum.Md);
export const isBreakpointLgUp = (): boolean => isBreakpointUp(BreakpointTypeEnum.Lg);
export const isBreakpointXlUp = (): boolean => isBreakpointUp(BreakpointTypeEnum.Xl);
export const isBreakpoint2XlUp = (): boolean => isBreakpointUp(BreakpointTypeEnum.Xxl);

const isBreakpointUp = (breakpoint: string): boolean => {
    const { currentBreakpointSize } = useBreakpoint();
    const screens: Record<string, string> = resolveConfig(tailwindConfig).theme.screens;

    if (currentBreakpointSize >= parseFloat(screens[breakpoint])) {
        return true;
    }
    return false;
}

export const isBreakpointXsOnly = (): boolean => isBreakpointOnly(BreakpointTypeEnum.Xs);
export const isBreakpointSmOnly = (): boolean => isBreakpointOnly(BreakpointTypeEnum.Sm);
export const isBreakpointMdOnly = (): boolean => isBreakpointOnly(BreakpointTypeEnum.Md);
export const isBreakpointLgOnly = (): boolean => isBreakpointOnly(BreakpointTypeEnum.Lg);
export const isBreakpointXlOnly = (): boolean => isBreakpointOnly(BreakpointTypeEnum.Xl);
export const isBreakpoint2XlOnly = (): boolean => isBreakpointOnly(BreakpointTypeEnum.Xxl);

const isBreakpointOnly = (breakpoint: string): boolean => {
    const { currentBreakpointSize } = useBreakpoint();
    const screens: Record<string, string> = resolveConfig(tailwindConfig).theme.screens;

    if (currentBreakpointSize == parseFloat(screens[breakpoint])) {
        return true;
    }
    return false;
}