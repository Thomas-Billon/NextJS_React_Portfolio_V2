'use client';

import React, { ReactNode, createContext, useState } from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import { DefaultProps } from '@/utils/React/Props';
import { useGridAnimation } from '@/hooks/UseGridAnimation';


export const GridContext = createContext({
    activeIndex: -1,
    setActiveIndex: (_: number): void => {}
});

const ProjectGrid = ({ children }: DefaultProps): ReactNode => {
    const [activeIndex, setActiveIndex] = useState(-1);

    if (typeof document !== 'undefined') {
        useGridAnimation(document.querySelector('#projects-grid'));
    }
    
    return(
        <GridContext.Provider value={{ activeIndex, setActiveIndex }}>
            <ul id="projects-grid" className={ProjectsGridStyle}>
                {children}
            </ul>
        </GridContext.Provider>
    );
};

export default ProjectGrid;


const ProjectsGridStyle = tw([
    'container',
    'mx-auto',
    'py-16',
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'xl:grid-cols-3',
    'gap-y-4',
    'md:gap-4',
    'md:auto-rows-fr'
]);