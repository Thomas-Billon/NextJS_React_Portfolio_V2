'use client';

import React from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import { GridContext } from '@/components/Project/Grid/ProjectGrid';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';


const ProjectCardClose = (): React.ReactNode => {
    const gridContext = useCustomContext(GridContext, 'ProjectGrid');

    const closeCard = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        gridContext.closeCard();
    };

    return(
        <span className={ProjectCardCloseStyle} onClick={closeCard}>
            <FontAwesomeIcon icon={fas.faClose} size="lg" className="aspect-square"/>
        </span>
    );
};

export default ProjectCardClose;


const ProjectCardCloseStyle = tw([
    'ProjectCardCloseStyle',
    'absolute',
    'top-0',
    'right-0',
    'cursor-pointer',
    'text-gray-500',
    'hover:text-orange-light-500',
    'transition-colors'
]);