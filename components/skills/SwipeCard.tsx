// use server
'use client';

import React, { RefObject } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { PackContext } from '@/components/skills/SkillPack';
import { SkillCardProps } from '@/components/skills/SkillCard';
import { useSwipeComponent } from '@/hooks/UseSwipeComponent';
import { useCustomContext } from '@/hooks/UseCustomContext';


const SwipeCard = ({ props = {} }: Props<SkillCardProps>): React.ReactNode => {
    const packContext = useCustomContext(PackContext, 'SkillPack');

    const zIndex = packContext.skillOrder.length - packContext.skillOrder.findIndex((value) => value == props.skill);

    const swipeComponent = useSwipeComponent({distance: 300, threshold: 100, isYAxisLocked: true, isAutoReset: true, onComplete: () => {
        if (props.skill) {
            packContext.placeSkillInLast(props.skill);
        }
    }});

    // TODO: Apply style from skill card
    // TODO: Clean up & rename stuff
    // TODO: Block scroll on start & unblock on end for touch (in useDragComponent)

    return (
        <div className={SwipeCardStyle} style={{ zIndex }}>
            <div
                ref={swipeComponent.componentRef as RefObject<HTMLDivElement>}
                className={SwipeCardContentStyle({ isSwipingCard: swipeComponent.isDraggingComponent })}
            >
                { props.skill }
            </div>
        </div>
    );
};

export default SwipeCard;


const SwipeCardStyle = tw([
    'SwipeCardStyle',
    'absolute',
    'bottom-[100px]',
    'left-1/2',
    '-translate-x-1/2',
    'w-[300px]',
    'h-[300px]'
]);

const SwipeCardContentStyle = ({ isSwipingCard }: { isSwipingCard: boolean }) => tw([
    'SwipeCardContentStyle',
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'h-full',
    'transform',
    'bg-white',
    'select-none',
    isSwipingCard && 'cursor-grabbing',
    !isSwipingCard && 'cursor-grab'
]);