'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';


const SkillGridCell = ({ children }: Props<DefaultProps>): React.ReactNode => {
    return (
        <li className={SkillGridCellStyle}>
            <div className={SkillGridCellCardContainerStyle}>
                {children}
            </div>
        </li>
    );
};

export default SkillGridCell;


const SkillGridCellStyle = tw([
    'SkillGridCellStyle',
    'inline-flex',
    'justify-center'
]);

const SkillGridCellCardContainerStyle = tw([
    'SkillGridCellCardContainerStyle',
    'shrink-0',
    'transform',
    'select-none',
    'w-24',
    'h-24',
    'shadow-lg',
    'cursor-auto'
]);
