// use server
'use client';

import React, { RefObject, useEffect, useRef } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { SkillCardProps } from '@/components/skills/SkillCard';
import { useSwipeComponent } from '@/hooks/UseSwipeComponent';


const SwipeCard = ({ props = {} }: Props<SkillCardProps>): React.ReactNode => {
    const swipeComponent = useSwipeComponent({distance: 300, isYAxisLocked: true, isAutoReset: true});

    // TODO: Fade + rotate
    // TODO: Block scroll on start & unblock on end for touch (in useDragComponent)

    return (
        <div className={SwipeCardStyle}>
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