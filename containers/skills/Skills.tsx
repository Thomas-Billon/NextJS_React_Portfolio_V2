// use server

import React, { ReactNode } from 'react';
import { skillsProps as props } from './SkillsProps';
import SkillCollection from '@/components/skills/collection/SkillCollection';
import SkillCollectionItem from '@/components/skills/collection/SkillCollectionItem';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillCard from '@/components/skills/card/SkillCard';
import { isNotNull } from '@/utils/global/NullableExtension';


const Skills = (): ReactNode => {
    return (
        <section id="skills" className={SkillsStyle}>
            <SkillCollection skills={props.cardProps.map((card) => card.skill).filter(isNotNull)}>
                {
                    props.cardProps.map((card, index) =>
                        <SkillCollectionItem key={index} {...{ props: card }}>
                            <SkillCard {...{ props: card }} />
                        </SkillCollectionItem>
                    )
                }
            </SkillCollection>
        </section>
    );
};

export default Skills;


const SkillsStyle = tw([
    'SkillsStyle',
    'bg-purple-900'
]);
