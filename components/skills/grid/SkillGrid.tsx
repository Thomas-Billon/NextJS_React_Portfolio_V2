'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';


const SkillGrid = ({ children }: Props<DefaultProps>): React.ReactNode => {
    return (
        <div className={SkillGridStyle}>
            <ul className={SkillGridCellContainerStyle}>
                {children}
            </ul>
        </div>
    );
};

export default SkillGrid;


const SkillGridStyle = tw([
    'SkillGridStyle',
    'flex',
    'justify-center',
    'items-center',
    'gap-10',
    'group/skill-grid'
]);

const SkillGridCellContainerStyle = tw([
    'SkillGridCellContainerStyle',
    'flex',
    'flex-wrap',
    'justify-center',
    'gap-4'
]);
