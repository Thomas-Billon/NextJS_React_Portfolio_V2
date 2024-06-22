'use client';

import React, { createContext, useEffect, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface PackContextProps {
    skillOrder: SkillEnum[];
    placeSkillInFirst: (skill: SkillEnum) => void;
    placeSkillInLast: (skill: SkillEnum) => void;
};

export const PackContext = createContext<PackContextProps>({
    skillOrder: [],
    placeSkillInFirst: (_): void => {},
    placeSkillInLast: (_): void => {}
});

export interface SkillPackProps {
    skills?: SkillEnum[];
};

const SkillPack = ({ children, skills = [] }: Props<SkillPackProps>): React.ReactNode => {
    const [skillOrder, setSkillOrder] = useState<SkillEnum[]>(skills);

    const placeSkillInFirst = (skill: SkillEnum): void => {
    }
    
    const placeSkillInLast = (skill: SkillEnum): void => {
        let newOrder = [...skillOrder]
        newOrder = newOrder.filter(value => value != skill)
        newOrder.push(skill);

        setSkillOrder(newOrder);
    }
    
    return(
        <PackContext.Provider value={{ skillOrder, placeSkillInFirst, placeSkillInLast }}>
            {children}
        </PackContext.Provider>
    );
};

export default SkillPack;