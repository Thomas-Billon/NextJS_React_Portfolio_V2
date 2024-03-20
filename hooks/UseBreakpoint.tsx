import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/UseWindowSize';
import tailwindConfig from '@/tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';
import { BreakpointTypeEnum, BreakpointSizeEnum } from '@/utils/BreakpointEnum';


export const useBreakpoint = (): { currentBreakpoint: string, currentBreakpointSize: number } => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');
    const [currentBreakpointSize, setCurrentBreakpointSize] = useState<number>(0);

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
//...

const isBreakpointDown = (breakpoint: string): boolean => {
    const { currentBreakpointSize } = useBreakpoint();
    const screens: Record<string, string> = resolveConfig(tailwindConfig).theme.screens;

    if (currentBreakpointSize <= parseFloat(screens[breakpoint])) {
        return true;
    }
    return false;
}