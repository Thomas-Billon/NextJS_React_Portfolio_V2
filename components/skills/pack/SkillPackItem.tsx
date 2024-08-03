'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { PackContext } from '@/components/skills/pack/SkillPack';
import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { useSwipeComponent } from '@/hooks/UseSwipeComponent';
import { useCustomContext } from '@/hooks/UseCustomContext';


const SkillPackItem = ({ children, props = {}}: Props<SkillCardProps>): React.ReactNode => {
    const packContext = useCustomContext(PackContext, 'SkillPack');

    const index = packContext.skillOrder.findIndex((value) => value == props.skill);
    const zIndex = packContext.skillOrder.length - index;

    // TODO: Add isEnabled argument
    const swipeComponent = useSwipeComponent({
        distance: 300, threshold: 100, isEnabled: !packContext.isSkillDisplayGrid, isYAxisLocked: true, isAutoReset: true,
        onComplete: () => {
            if (props.skill) {
                packContext.placeSkillInLast(props.skill);
            }
        }
    });

    const swipeRef = useRef(swipeComponent);

    useEffect(() => {
        if (index == 0) {
            packContext.swipeCard = swipeRef;
        }
    }, [packContext, swipeRef, index]);

    return (
        <li className={SkillPackItemStyle({ cardIndex: index, isDisplayGrid: packContext.isSkillDisplayGrid })} style={{ zIndex }}>
            <div
                ref={swipeComponent.componentRef as RefObject<HTMLDivElement>}
                className={SkillPackItemSwipeStyle({ cardIndex: index, isSwipingCard: swipeComponent.isDraggingComponent, isDisplayGrid: packContext.isSkillDisplayGrid })}
            >
                {children}
            </div>
        </li>
    );
};

export default SkillPackItem;


const SkillPackItemStyle = ({ cardIndex, isDisplayGrid }: { cardIndex: number, isDisplayGrid: boolean }) => tw([
    'SkillPackItemStyle',
    'inline-flex',
    'justify-center',
    !isDisplayGrid && 'w-0',
    !isDisplayGrid && cardIndex <= 1 && 'transition-transform',
    !isDisplayGrid && cardIndex == 1 && 'scale-95',
    !isDisplayGrid && cardIndex > 1 && 'scale-50'
]);

const SkillPackItemSwipeStyle = ({ cardIndex, isSwipingCard, isDisplayGrid }: { cardIndex: number, isSwipingCard: boolean, isDisplayGrid: boolean }) => tw([
    'SkillPackItemSwipeStyle',
    'shrink-0',
    'transform',
    'select-none',
    'group/pack-item',
    isDisplayGrid && 'display-grid',
    isDisplayGrid && 'w-24',
    isDisplayGrid && 'h-24',
    !isDisplayGrid && 'w-48',
    !isDisplayGrid && 'h-48',
    (isDisplayGrid || cardIndex <= 1) && 'shadow-lg',
    (isDisplayGrid || cardIndex >= 1) && 'cursor-auto',
    !isDisplayGrid && cardIndex < 1 && isSwipingCard && 'cursor-grabbing',
    !isDisplayGrid && cardIndex < 1 && !isSwipingCard && 'cursor-grab'
]);
