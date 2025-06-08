'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { GridContext } from '@/components/projects/grid/ProjectGrid';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';


const ProjectCardClose = (): React.ReactNode => {
    const gridContext = useCustomContext(GridContext);

    const closeCard = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        gridContext.closeCard();
    };

    return (
        <span className={styles.ProjectCardCloseStyle} onClick={closeCard}>
            <FontAwesomeIcon icon={fas.faClose} size="lg" fixedWidth />
        </span>
    );
};

export default ProjectCardClose;


const styles = tw({
    ProjectCardCloseStyle: [
        'absolute',
        'top-0',
        'right-0',
        'cursor-pointer',
        'text-gray-500',
        'transition-colors',
        'hover:text-orange-light-500',
        'active:text-orange-light-500'
    ]
});
