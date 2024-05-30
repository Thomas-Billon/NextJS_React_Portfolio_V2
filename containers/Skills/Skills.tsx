// use server

import React, { ReactNode } from 'react';
import { skillsProps as props } from './SkillsProps';
import SkillCategory from '@/components/skills/SkillCategory';
import SwipeCard from '@/components/skills/SwipeCard';
import { tw } from '@/utils/tailwind/TinyWind';


const Skills = (): ReactNode => {
    return(
        <section id="skills" className={SkillsStyle}>
            <ul className={SkillsCategoryListStyle}>
                {
                    props.categoryProps.map((category, index) =>
                        <SkillCategory key={index} { ...{ props: category }} />
                    )
                }
            </ul>

            <div>
                {
                    props.categoryProps.map((category) =>
                        category.skills?.map((skill, index) =>
                            <SwipeCard key={index} { ...{ props: skill }} />
                        )
                    )
                }
            </div>
        </section>
    );
};

export default Skills;


const SkillsStyle = tw([
    'SkillsStyle',
    'bg-purple-900',
    'relative',
    'pb-[400px]'
]);

const SkillsCategoryListStyle = tw([
    'SkillsCategoryListStyle',
    'container-section',
    'columns-1',
    'md:columns-2',
    'lg:columns-3',
    'xl:columns-4',
    'gap-4',
    'space-y-4'
]);