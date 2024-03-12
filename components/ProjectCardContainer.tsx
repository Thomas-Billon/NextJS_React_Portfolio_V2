'use client';

import React, { ReactNode, useContext } from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import { DefaultProps, IterableProps } from '@/utils/React/Props';
import { GridContext } from '@/components/ProjectGrid';


const ProjectCardContainer = ({ children, index = -2 }: DefaultProps & IterableProps): ReactNode => {
    const gridContext = useContext(GridContext);

    return(
        <li className={ProjectCardContainerStyle({ isActive: (gridContext.activeIndex == index) })} onClick={() => { gridContext.setActiveIndex(index); }}>
            {children}
        </li>
    );
};

export default ProjectCardContainer;


const ProjectCardContainerStyle = ({ isActive }: { isActive: boolean }) => tw([
    isActive && 'col-span-1',
    isActive && 'md:col-span-2',
    isActive && 'row-span-2',
    !isActive && 'cursor-pointer',
    !isActive && 'aspect-video'
]);