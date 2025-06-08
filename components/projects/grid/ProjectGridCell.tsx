'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { GridContext } from '@/components/projects/grid/ProjectGrid';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { DefaultProps, IterableProps } from '@/utils/react/Props';


const ProjectGridCell = ({ children, index = 0 }: DefaultProps & IterableProps): React.ReactNode => {
    const gridContext = useCustomContext(GridContext);

    const openCard = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        gridContext.openCard(index);
    };

    return (
        <li className={styles.ProjectGridCellStyle({ isActive: (gridContext.activeIndex == index) })} onClick={openCard}>
            {children}
        </li>
    );
};

export default ProjectGridCell;


const styles = tw({
    ProjectGridCellStyle: ({ isActive }: {
        isActive: boolean
    }) => [
        'w-full',
        'md:w-auto',
        isActive && 'col-span-1',
        isActive && 'md:col-span-2',
        isActive && 'row-span-2',
        !isActive && 'cursor-pointer',
        !isActive && 'aspect-video'
    ]
});
