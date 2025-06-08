'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';


const SkillGrid = ({ children }: Props<DefaultProps>): React.ReactNode => {
    return (
        <div className={styles.SkillGridStyle}>
            <ul className={styles.SkillGridCellContainerStyle}>
                {children}
            </ul>
        </div>
    );
};

export default SkillGrid;


const styles = tw({
    SkillGridStyle: [
        'flex',
        'justify-center',
        'items-center',
        'gap-10',
        'group/skill-grid'
    ],

    SkillGridCellContainerStyle: [
        'flex',
        'flex-wrap',
        'justify-center',
        'gap-4'
    ]
});
