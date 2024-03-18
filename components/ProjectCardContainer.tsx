'use client';

import React, { useContext } from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import { GridContext } from '@/components/ProjectGrid';
import { DefaultProps, IterableProps } from '@/utils/React/Props';


const ProjectCardContainer = ({ children, index = 0 }: DefaultProps & IterableProps): React.ReactNode => {
    const gridContext = useContext(GridContext);

    const openCard = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        gridContext.openCard(index);
    };

    return(
        <li className={ProjectCardContainerStyle({ isActive: (gridContext.activeIndex == index) })} onClick={openCard}>
            {children}
        </li>
    );
};

export default ProjectCardContainer;


const ProjectCardContainerStyle = ({ isActive }: { isActive: boolean }) => tw([
    'ProjectCardContainerStyle',
    isActive && 'col-span-1',
    isActive && 'md:col-span-2',
    isActive && 'row-span-2',
    !isActive && 'cursor-pointer',
    !isActive && 'aspect-video'
]);