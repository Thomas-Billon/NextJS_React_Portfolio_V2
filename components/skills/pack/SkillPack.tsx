'use client';

import React, { createContext, useState, RefObject, useRef } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillPackButton from '@/components/skills/pack/SkillPackButton';
import { Props } from '@/utils/react/Props';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { useSwipeComponent } from '@/hooks/UseSwipeComponent';
import useStateRef from 'react-usestateref';


export const PackContext = createContext({
    swipeCard: null as RefObject<ReturnType<typeof useSwipeComponent>> | null,
    skillOrder: [] as SkillEnum[],
    placeSkillInFirst: (_: SkillEnum): void => {},
    placeSkillInLast: (_: SkillEnum): void => {}
});

export interface SkillPackProps {
    skills?: SkillEnum[];
};

const SkillPack = ({ children, skills = [] }: Props<SkillPackProps>): React.ReactNode => {
    const swipeCard = useRef<ReturnType<typeof useSwipeComponent> | null>(null);
    const [skillOrder, setSkillOrder, skillOrderRef] = useStateRef<SkillEnum[]>(skills);

    const placeSkillInFirst = (skill: SkillEnum): void => {
    };
    
    const placeSkillInLast = (skill: SkillEnum): void => {
        let newOrder = [...skillOrderRef.current];
        newOrder = newOrder.filter(value => value != skill);
        newOrder.push(skill);

        setSkillOrder(newOrder);
    };
    
    return (
        <PackContext.Provider value={{ swipeCard, skillOrder, placeSkillInFirst, placeSkillInLast }}>
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
