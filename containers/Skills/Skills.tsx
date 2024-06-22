// use server

import React, { ReactNode, useEffect } from 'react';
import { skillsProps as props } from './SkillsProps';
import SkillCategory, { SkillCategoryProps } from '@/components/skills/SkillCategory';
import SkillPack from '@/components/skills/SkillPack';
import SwipeCard from '@/components/skills/SwipeCard';
import { tw } from '@/utils/tailwind/TinyWind';
import { SkillEnum } from '@/utils/enums/SkillEnum';


const Skills = (): ReactNode => {
    let skills: SkillEnum[] = [];
    props.categoryProps.map((category) =>
        category.skills?.map((skill) => {
            if (skill.skill) {
                skills.push(skill.skill);
            }
        })
    );

    return(
        <section id="skills" className={SkillsStyle}>
            <ul className={SkillsCategoryListStyle}>
                {
                    props.categoryProps.map((category, index) =>
                        <SkillCategory key={index} { ...{ props: category }} />
                    )
                }
            </ul>

            <SkillPack skills={skills}>
                {
                    props.categoryProps.map((category) =>
                        category.skills?.map((skill) => {
                            return <SwipeCard key={skills.findIndex((value) => value == skill.skill)} { ...{ props: skill }} />
                        })
                    )
                }
            </SkillPack>
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