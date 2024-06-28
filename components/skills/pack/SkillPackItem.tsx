'use client';

import React, { RefObject } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { PackContext } from '@/components/skills/pack/SkillPack';
import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { useSwipeComponent } from '@/hooks/UseSwipeComponent';
import { useCustomContext } from '@/hooks/UseCustomContext';


const SkillPackItem = ({ children, props = {} }: Props<SkillCardProps>): React.ReactNode => {
    const packContext = useCustomContext(PackContext, 'SkillPack');

    const order = packContext.skillOrder.findIndex((value) => value == props.skill);
    const zIndex = packContext.skillOrder.length - order;

    const swipeComponent = useSwipeComponent({distance: 300, threshold: 100, isYAxisLocked: true, isAutoReset: true, onComplete: () => {
        if (props.skill) {
            packContext.placeSkillInLast(props.skill);
        }
    }});

    // TODO: Display skill proficiency
    // TODO: Fix issue on drag, only accept left mouse click
    // TODO: Fix issue on drop, card stays hovered
    // TODO: Fix issue on drop, hover animation is visible behind pack
    // TODO: Block scroll on start & unblock on end for touch (in useDragComponent)
    // TODO: Add buttons on each side

    return (
        <li className={SwipeCardStyle} style={{ zIndex }}>
            <div
                ref={swipeComponent.componentRef as RefObject<HTMLDivElement>}
                className={SwipeCardContentStyle({ isSwipingCard: swipeComponent.isDraggingComponent, cardOrder: order })}
            >
                { children }
            </div>
        </li>
    );
};

export default SkillPackItem;


const SwipeCardStyle = tw([
    'SwipeCardStyle',
    'inline-flex',
    'w-0',
    'justify-center'
]);

const SwipeCardContentStyle = ({ isSwipingCard, cardOrder }: { isSwipingCard: boolean, cardOrder: number }) => tw([
    'SwipeCardContentStyle',
    'transform',
    'select-none',
    isSwipingCard && 'cursor-grabbing',
    !isSwipingCard && 'cursor-grab',
    cardOrder <= 1 && 'shadow-lg'
]);