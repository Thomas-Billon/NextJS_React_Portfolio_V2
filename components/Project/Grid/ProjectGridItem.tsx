'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { GridContext } from '@/components/project/grid/ProjectGrid';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { DefaultProps, IterableProps } from '@/utils/react/Props';


const ProjectGridItem = ({ children, index = 0 }: DefaultProps & IterableProps): React.ReactNode => {
    const gridContext = useCustomContext(GridContext, 'ProjectGrid');

    const openCard = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        gridContext.openCard(index);
    };

    return(
        <li className={ProjectGridItemStyle({ isActive: (gridContext.activeIndex == index) })} onClick={openCard}>
            {children}
        </li>
    );
};

export default ProjectGridItem;


const ProjectGridItemStyle = ({ isActive }: { isActive: boolean }) => tw([
    'ProjectGridItemStyle',
    isActive && 'col-span-1',
    isActive && 'md:col-span-2',
    isActive && 'row-span-2',
    !isActive && 'cursor-pointer',
    !isActive && 'aspect-video'
]);