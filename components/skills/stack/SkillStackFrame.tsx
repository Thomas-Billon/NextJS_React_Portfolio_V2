'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { StackContext } from '@/components/skills/stack/SkillStack';
import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { useSwipeComponent } from '@/hooks/UseSwipeComponent';
import { useCustomContext } from '@/hooks/UseCustomContext';


const SkillStackFrame = ({ children, props = {}}: Props<SkillCardProps>): React.ReactNode => {
    const stackContext = useCustomContext(StackContext);

    const index = stackContext.skillOrder.findIndex((value) => value == props.skill);
    const zIndex = stackContext.skillOrder.length - index;

    const swipeComponent = useSwipeComponent({
        distance: 300, threshold: 100, isYAxisLocked: true, isAutoReset: true,
        onComplete: () => {
            if (props.skill) {
                stackContext.placeSkillInLast(props.skill);
            }
        }
    });

    const swipeRef = useRef(swipeComponent);

    useEffect(() => {
        if (index == 0) {
            stackContext.swipeCard = swipeRef;
        }
    }, [stackContext, swipeRef, index]);

    return (
        <li className={styles.SkillStackFrameStyle({ cardIndex: index })} style={{ zIndex }}>
            <div
                ref={swipeComponent.componentRef as RefObject<HTMLDivElement>}
                className={styles.SkillStackFrameCardContainerStyle({ cardIndex: index, isSwipingCard: swipeComponent.isDraggingComponent })}
            >
                {children}
            </div>
        </li>
    );
};

export default SkillStackFrame;


const styles = tw({
    SkillStackFrameStyle: ({ cardIndex }: {
        cardIndex: number
    }) => [
        'inline-flex',
        'justify-center',
        'w-0',
        cardIndex <= 1 && 'transition-transform',
        cardIndex == 1 && 'scale-95',
        cardIndex > 1 && 'scale-50'
    ],

    SkillStackFrameCardContainerStyle: ({ cardIndex, isSwipingCard }: {
        cardIndex: number,
        isSwipingCard: boolean
    }) => [
        'shrink-0',
        'transform',
        'select-none',
        'w-48',
        'h-48',
        cardIndex <= 1 && 'shadow-lg',
        cardIndex >= 1 && 'cursor-auto',
        cardIndex < 1 && isSwipingCard && 'cursor-grabbing',
        cardIndex < 1 && !isSwipingCard && 'cursor-grab'
    ]
});
