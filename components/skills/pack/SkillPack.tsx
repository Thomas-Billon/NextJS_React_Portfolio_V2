'use client';

import React, { createContext, useEffect, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export const PackContext = createContext({
    skillOrder: [] as SkillEnum[],
    placeSkillInFirst: (_: SkillEnum): void => {},
    placeSkillInLast: (_: SkillEnum): void => {}
});

export interface SkillPackProps {
    skills?: SkillEnum[];
};

const SkillPack = ({ children, skills = [] }: Props<SkillPackProps>): React.ReactNode => {
    const [skillOrder, setSkillOrder] = useState<SkillEnum[]>(skills);

    const placeSkillInFirst = (skill: SkillEnum): void => {
    };
    
    const placeSkillInLast = (skill: SkillEnum): void => {
        let newOrder = [...skillOrder];
        newOrder = newOrder.filter(value => value != skill);
        newOrder.push(skill);

        setSkillOrder(newOrder);
    };
    
    return (
        <PackContext.Provider value={{ skillOrder, placeSkillInFirst, placeSkillInLast }}>
            <ul className={SkillPackStyle}>
                {children}
            </ul>
        </PackContext.Provider>
    );
};

export default SkillPack;


const SkillPackStyle = tw([
    'SkillPackStyle',
    'container-section',
    'flex',
    'justify-center'
]);
