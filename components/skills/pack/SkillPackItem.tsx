'use client';

import React, { RefObject } from 'react';
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

    const swipeComponent = useSwipeComponent({
        distance: 300, threshold: 100, isYAxisLocked: true, isAutoReset: true,
        onComplete: () => {
            if (props.skill) {
                packContext.placeSkillInLast(props.skill);
            }
        }
    });

    // TODO: Block scroll on start & unblock on end for touch (in useDragComponent)
    // TODO: Add buttons on each side

    return (
        <li className={SkillPackItemStyle({ cardIndex: index })} style={{ zIndex }}>
            <div
                ref={swipeComponent.componentRef as RefObject<HTMLDivElement>}
                className={SkillPackItemSwipeStyle({ cardIndex: index, isSwipingCard: swipeComponent.isDraggingComponent })}
            >
                {children}
            </div>
        </li>
    );
};

export default SkillPackItem;


const SkillPackItemStyle = ({ cardIndex }: { cardIndex: number }) => tw([
    'SkillPackItemStyle',
    'inline-flex',
    'w-0',
    'justify-center',
    cardIndex <= 1 && 'transition-transform',
    cardIndex == 1 && 'scale-95',
    cardIndex > 1 && 'scale-50'
]);

const SkillPackItemSwipeStyle = ({ cardIndex, isSwipingCard }: { cardIndex: number, isSwipingCard: boolean }) => tw([
    'SkillPackItemSwipeStyle',
    'transform',
    'select-none',
    cardIndex <= 1 && 'shadow-lg',
    cardIndex >= 1 && 'cursor-auto',
    cardIndex < 1 && isSwipingCard && 'cursor-grabbing',
    cardIndex < 1 && !isSwipingCard && 'cursor-grab'
]);
