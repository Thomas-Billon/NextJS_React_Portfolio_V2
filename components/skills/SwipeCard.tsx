// use server
'use client';

import React, { RefObject } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { SkillCardProps } from '@/components/skills/SkillCard';
import { useDragComponent } from '@/hooks/UseDragComponent';


const SwipeCard = ({ props = {} }: Props<SkillCardProps>): React.ReactNode => {

    const dragComponent = useDragComponent({isYAxisLocked: true, isAutoReset: true});

    // Fade + rotate
    // Block scroll on start & unblock on end for touch (in useDragComponent)

    return (
        <div className={SwipeCardStyle}>
            <div
                ref={dragComponent.componentRef as RefObject<HTMLDivElement>}
                className={SwipeCardContentStyle({ isSwipingCard: dragComponent.isDraggingCard })}
                onMouseDown={dragComponent.onDragStart}
                onMouseMove={dragComponent.onDragMove}
                onMouseUp={dragComponent.onDragEnd}
                onTouchStart={dragComponent.onDragStart}
                onTouchMove={dragComponent.onDragMove}
                onTouchEnd={dragComponent.onDragEnd}
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
    'bg-white',
    'select-none',
    isSwipingCard && 'cursor-grabbing',
    !isSwipingCard && 'cursor-grab'
]);