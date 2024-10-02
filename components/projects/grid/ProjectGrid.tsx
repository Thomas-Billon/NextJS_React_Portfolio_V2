'use client';

import React, { createContext, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps } from '@/utils/react/Props';
import { useGridAnimation } from '@/hooks/UseGridAnimation';


export const GridContext = createContext({
    activeIndex: -1,
    openCard: (_: number): void => {},
    closeCard: (): void => {}
});

const ProjectGrid = ({ children }: DefaultProps): React.ReactNode => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    if (typeof document !== 'undefined') {
        useGridAnimation({ grid: document.querySelector('#project-grid') });
    }

    const openCard = (index: number): void => {
        setActiveIndex(index);
    };
    
    const closeCard = (): void => {
        setActiveIndex(-1);
    };
    
    return (
        <GridContext.Provider value={{ activeIndex, openCard, closeCard }}>
            <ul id="project-grid" className={ProjectsGridStyle}>
                {children}
            </ul>
        </GridContext.Provider>
    );
};

export default ProjectGrid;


const ProjectsGridStyle = tw([
    'ProjectsGridStyle',
    'container-section',
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'xl:grid-cols-3',
    'gap-y-4',
    'md:gap-4',
    'md:auto-rows-fr'
]);
