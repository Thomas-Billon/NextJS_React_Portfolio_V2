// use server

import React, { ReactNode } from 'react';
import { skillsProps as props } from './SkillsProps';
import SkillCategory from '@/components/skills/SkillCategory';
import { tw } from '@/utils/tailwind/TinyWind';


const Skills = (): ReactNode => {
    return(
        <section id="skills" className={SkillsStyle}>
            <ul className={SkillsCategoryListStyle}>
                {
                    props.cardProps.map((skillCategory, index) =>
                        <SkillCategory key={index} { ...{ props: skillCategory }} />
                    )
                }
            </ul>
        </section>
    );
};

export default Skills;


const SkillsStyle = tw([
    'SkillsStyle',
    'bg-purple-900'
]);

const SkillsCategoryListStyle = tw([
    'SkillsCategoryListStyle',
    'container-section',
    'columns-1',
    'md:columns-2',
    'xl:columns-3',
    '2xl:columns-4',
    'gap-4',
    'space-y-4'
]);