// use server

import React, { ReactNode } from 'react';
import { skillsProps as props } from './SkillsProps';
import SkillLayout from '@/components/skills/layout/SkillLayout';
import SkillLayoutItem from '@/components/skills/layout/SkillLayoutItem';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillCard from '@/components/skills/card/SkillCard';
import { isNotNull } from '@/utils/global/NullableExtension';


const Skills = (): ReactNode => {
    return (
        <section id="skills" className={styles.SkillsStyle}>
            <SkillLayout skills={props.cardProps.map((card) => card.skill).filter(isNotNull)}>
                {
                    props.cardProps.map((skill, index) =>
                        <SkillLayoutItem key={index} {...{ props: skill }}>
                            <SkillCard {...{ props: skill }} />
                        </SkillLayoutItem>
                    )
                }
            </SkillLayout>
        </section>
    );
};

export default Skills;


const styles = tw({
    SkillsStyle: [
        'bg-gradient-to-br',
        'from-purple-900',
        'to-blue-dark-900'
    ]
});
