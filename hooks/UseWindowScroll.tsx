import { useState, useEffect } from 'react';


interface WindowScroll {
    x?: number;
    y?: number;
}

export const useWindowScroll = (): WindowScroll => {
    const [windowScroll, setWindowScroll] = useState<WindowScroll>({
        x: undefined,
        y: undefined
    });

    useEffect(() => {
        const handleScroll = () => {
            setWindowScroll({
                x: window.pageXOffset,
                y: window.pageYOffset
            });
        };

        // Runs at once to init object with correct values
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return windowScroll;
};
