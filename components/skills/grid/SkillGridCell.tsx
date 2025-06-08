'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';


const SkillGridCell = ({ children }: Props<DefaultProps>): React.ReactNode => {
    return (
        <li className={styles.SkillGridCellStyle}>
            <div className={styles.SkillGridCellCardContainerStyle}>
                {children}
            </div>
        </li>
    );
};

export default SkillGridCell;


const styles = tw({
    SkillGridCellStyle: [
        'inline-flex',
        'justify-center'
    ],

    SkillGridCellCardContainerStyle: [
        'shrink-0',
        'transform',
        'select-none',
        'w-24',
        'h-24',
        'shadow-lg',
        'cursor-auto'
    ]
});
