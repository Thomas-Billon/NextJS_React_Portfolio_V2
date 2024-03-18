'use client';

import React, { useContext, useEffect } from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import { GridContext } from '@/components/ProjectGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';


const ProjectCardClose = (): React.ReactNode => {
    const gridContext = useContext(GridContext);

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
    'top-2.5',
    'right-2.5',
    'cursor-pointer',
    'text-gray-500',
    'hover:text-orange-light-500',
    'transition-colors'
]);