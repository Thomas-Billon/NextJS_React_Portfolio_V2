'use client';

import React, { createContext, useState, RefObject, useRef } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillStackButton from '@/components/skills/stack/SkillStackButton';
import { Props } from '@/utils/react/Props';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { useSwipeComponent } from '@/hooks/UseSwipeComponent';
import { SkillCollectionButtonEnum } from '@/utils/enums/SkillCollectionButtonEnum';


export const StackContext = createContext({
    swipeCard: null as RefObject<ReturnType<typeof useSwipeComponent>> | null,
    skillOrder: [] as SkillEnum[],
    placeSkillInFirst: (_: SkillEnum): void => {},
    placeSkillInLast: (_: SkillEnum): void => {}
});

export interface SkillStackProps {
    skills?: SkillEnum[];
};

const SkillStack = ({ children, props = {}}: Props<SkillStackProps>): React.ReactNode => {
    const swipeCard = useRef<ReturnType<typeof useSwipeComponent> | null>(null);
    const [skillOrder, setSkillOrder] = useState<SkillEnum[]>(props.skills ?? []);

    const placeSkillInFirst = (skill: SkillEnum): void => {
    };
    
    const placeSkillInLast = (skill: SkillEnum): void => {
        setSkillOrder((oldSkillOrder) => {
            let newSkillOrder = [...oldSkillOrder];
            newSkillOrder = newSkillOrder.filter(value => value != skill);
            newSkillOrder.push(skill);

            return newSkillOrder;
        });
    };
    
    return (
        <StackContext.Provider value={{ swipeCard, skillOrder, placeSkillInFirst, placeSkillInLast }}>
            <div className={SkillStackStyle}>
                <SkillStackButton {...{ props: { buttonType: SkillCollectionButtonEnum.SwipeLeft }}} />
                <ul className={SkillStackFrameContainerStyle}>
                    {children}
                </ul>
                <SkillStackButton {...{ props: { buttonType: SkillCollectionButtonEnum.SwipeRight }}} />
            </div>
        </StackContext.Provider>
    );
};

export default SkillStack;


const SkillStackStyle = tw([
    'SkillStackStyle',
    'flex',
    'justify-center',
    'items-center',
    'gap-10'
]);

const SkillStackFrameContainerStyle = tw([
    'SkillStackFrameContainerStyle',
    'flex',
    'flex-wrap',
    'justify-center',
    'px-24'
]);