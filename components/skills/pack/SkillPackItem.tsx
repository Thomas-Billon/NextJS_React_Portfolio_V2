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

    // TODO: Fix issue on drag, only accept left mouse click
    // TODO: Fix issue on drop, pointer stays on grab if not moving
    // TODO: Fix issue on drop, hover animation is visible behind pack
    // TODO: Block scroll on start & unblock on end for touch (in useDragComponent)
    // TODO: Add buttons on each side

    return (
        <li className={SwipeCardStyle({ cardIndex: index })} style={{ zIndex }}>
            <div
                ref={swipeComponent.componentRef as RefObject<HTMLDivElement>}
                className={SwipeCardContentStyle({ isSwipingCard: swipeComponent.isDraggingComponent })}
            >
                {children}
            </div>
        </li>
    );
};

export default SkillPackItem;


const SwipeCardStyle = ({ cardIndex }: { cardIndex: number }) => tw([
    'SwipeCardStyle',
    'inline-flex',
    'w-0',
    'justify-center',
    'transition-transform',
    cardIndex <= 1 && 'shadow-lg',
    cardIndex == 1 && 'scale-95',
    cardIndex > 1 && 'scale-90'
]);

const SwipeCardContentStyle = ({ isSwipingCard }: { isSwipingCard: boolean }) => tw([
    'SwipeCardContentStyle',
    'transform',
    'select-none',
    isSwipingCard && 'cursor-grabbing',
    !isSwipingCard && 'cursor-grab'
]);
