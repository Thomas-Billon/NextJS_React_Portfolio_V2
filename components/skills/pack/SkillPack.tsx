'use client';

import React, { createContext, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillPackButton from '@/components/skills/pack/SkillPackButton';
import { Props } from '@/utils/react/Props';
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
            <div className={SkillPackStyle}>
                <SkillPackButton {...{ props: { direction: -1 }}} />
                <ul className={SkillPackItemListStyle}>
                    {children}
                </ul>
                <SkillPackButton {...{ props: { direction: 1 }}} />
            </div>
        </PackContext.Provider>
    );
};

export default SkillPack;


const SkillPackStyle = tw([
    'SkillPackStyle',
    'container-section',
    'flex',
    'justify-center',
    'items-center',
    'gap-10'
]);

const SkillPackItemListStyle = tw([
    'SkillPackItemCardListStyle',
    'flex',
    'px-24'
]);
