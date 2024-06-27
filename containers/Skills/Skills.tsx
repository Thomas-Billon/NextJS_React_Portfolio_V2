// use server

import React, { ReactNode } from 'react';
import { skillsProps as props } from './SkillsProps';
import SkillPack from '@/components/skills/pack/SkillPack';
import SkillPackItem from '@/components/skills/pack/SkillPackItem';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillCard from '@/components/skills/card/SkillCard';
import { isNotNull } from '@/utils/global/NullableExtension';


const Skills = (): ReactNode => {
    return(
        <section id="skills" className={SkillsStyle}>
            <SkillPack skills={ props.cardProps.map((card) => card.skill).filter(isNotNull) }>
                {
                    props.cardProps.map((card, index) =>
                        <SkillPackItem key={index} { ...{ props: card }}>
                            <SkillCard { ...{ props: card }} />
                        </SkillPackItem>
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
    'relative'
]);