import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/UseWindowSize';
import tailwindConfig from '@/tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';


export const useBreakpoint = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');

    // Runs each time window size is changed
    const size = useWindowSize();
    useEffect(() => {
        const screens: Record<string, string> = resolveConfig(tailwindConfig).theme.screens;
        const breakpoints: string[] = Object.keys(screens).reverse();

        let breakpoint = '';
        
        if (size.width) {
            breakpoint = 'xs';

            for (let i = 0; i < breakpoints.length; i++) {
                if ((size.width ?? 0) > parseFloat(screens[breakpoints[i]])) {
                    breakpoint = breakpoints[i];
                    break;
                }
            }
        }

        setCurrentBreakpoint(breakpoint);

    }, [size]);

    return currentBreakpoint;
}