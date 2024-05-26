// use server

import React from 'react';
import SkillCard, { SkillCardProps } from '@/components/skills/SkillCard';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';


export interface SkillCategoryProps {
    title?: string;
    skillImageRatio?: number;
    skills?: SkillCardProps[];
}

const SkillCategory = ({ props = {} }: Props<SkillCategoryProps>): React.ReactNode => {
    return (
        <li className={SkillCategoryStyle}>
            <h4 className={SkillCategoryTitleStyle}>{props.title}</h4>
            
            <ul className={SkillCardListStyle}>
                {
                    props.skills?.map((skill, index) =>
                        <SkillCard key={index} { ...{ props: {...skill, imageRatio: props.skillImageRatio ?? 1 }}} />
                    )
                }
            </ul>
        </li>
    );
};

export default SkillCategory;


const SkillCategoryStyle = tw([
    'SkillCategoryStyle',
    'w-full',
    'p-4',
    'break-inside-avoid-column',
    'bg-white',
    'rounded-lg',
    'shadow-md'
]);

const SkillCategoryTitleStyle = tw([
    'SkillCategoryTitleStyle',
    'text-center',
    'text-xl',
    'font-medium',
    'mb-4'
]);

const SkillCardListStyle = tw([
    'SkillCardListStyle',
    'flex',
    'flex-wrap',
    'justify-center',
    'gap-4'
]);