// use server

import React from 'react';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { Props } from '@/utils/react/Props';
import { tw } from '@/utils/tailwind/TinyWind';


export interface SkillFlagProps {
    skill?: SkillEnum;
}

const SkillFlag = ({ props = {}}: Props<SkillFlagProps>): React.ReactNode => {
    return (
        <span className={styles.SkillFlagStyle}>
            {props.skill}
        </span>
    );
};

export default SkillFlag;


const styles = tw({
    SkillFlagStyle: [
        'inline-block',
        'px-2',
        'py-0.5',
        'bg-orange-light-100',
        'text-orange-light-600',
        'text-xs',
        'font-medium',
        'border',
        'border-orange-light-400',
        'rounded'
    ]
});
