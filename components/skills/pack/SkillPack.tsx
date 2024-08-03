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
    isSkillDisplayGrid: false,
    placeSkillInFirst: (_: SkillEnum): void => {},
    placeSkillInLast: (_: SkillEnum): void => {},
    toggleSkillDisplayGrid: (): void => {}
});

export interface SkillPackProps {
    skills?: SkillEnum[];
};

const SkillPack = ({ children, skills = [] }: Props<SkillPackProps>): React.ReactNode => {
    const swipeCard = useRef<ReturnType<typeof useSwipeComponent> | null>(null);
    const [skillOrder, setSkillOrder, skillOrderRef] = useStateRef<SkillEnum[]>(skills);
    const [isSkillDisplayGrid, setIsSkillDisplayGrid] = useState<boolean>(false);

    const toggleSkillDisplayGrid = (): void => {
        setIsSkillDisplayGrid(!isSkillDisplayGrid);
    };

    const placeSkillInFirst = (skill: SkillEnum): void => {
    };
    
    const placeSkillInLast = (skill: SkillEnum): void => {
        let newOrder = [...skillOrderRef.current];
        newOrder = newOrder.filter(value => value != skill);
        newOrder.push(skill);

        setSkillOrder(newOrder);
    };
    
    return (
        <PackContext.Provider value={{ swipeCard, skillOrder, isSkillDisplayGrid, placeSkillInFirst, placeSkillInLast, toggleSkillDisplayGrid }}>
            <div className={SkillPackStyle}>
                <div className={SkillPackContainerStyle}> {
                        !isSkillDisplayGrid && <SkillPackButton {...{ props: { direction: -1 }}} />
                    }
                    <ul className={SkillPackItemListStyle({ isDisplayGrid: isSkillDisplayGrid })}>
                        {children}
                    </ul>
                    {
                        !isSkillDisplayGrid && <SkillPackButton {...{ props: { direction: 1 }}} />
                } </div>
                <div className={SkillPackSwitchContainerStyle}>
                    <SkillPackButton {...{ props: { direction: 0 }}} />
                </div>
            </div>
        </PackContext.Provider>
    );
};

export default SkillPack;


const SkillPackStyle = tw([
    'SkillPackStyle',
    'container-section'
]);

const SkillPackContainerStyle = tw([
    'flex',
    'justify-center',
    'items-center',
    'gap-10'
]);

const SkillPackItemListStyle = ({ isDisplayGrid }: { isDisplayGrid: boolean }) => tw([
    'SkillPackItemCardListStyle',
    'flex',
    'flex-wrap',
    'justify-center',
    isDisplayGrid && 'gap-4',
    !isDisplayGrid && 'px-24'
]);

const SkillPackSwitchContainerStyle = tw([
    'SkillPackSwitchContainer',
    'flex',
    'justify-center',
    'pt-6'
]);
