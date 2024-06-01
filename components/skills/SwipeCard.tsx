// use server
'use client';

import React, { RefObject, useRef, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { Vector2 } from '@/utils/global/Vector2';
import { startCssAnimation, stopCssAnimation, stopCssAnimationOnProperty } from '@/utils/global/CssAnimation';
import { SkillCardProps } from '@/components/skills/SkillCard';


const SwipeCard = ({ props = {} }: Props<SkillCardProps>): React.ReactNode => {
    const cardRef = useRef<HTMLElement>(null);
    const [isSwipingCard, setIsSwipingCard] = useState<boolean>(false);
    const [swipePreviousPosition, setSwipePreviousPosition] = useState<Vector2>({x: 0, y: 0});
    const [swipeOriginPosition, setSwipeOriginPosition] = useState<Vector2>({x: 0, y: 0});
    const [swipeCurrentPosition, setSwipeCurrentPosition] = useState<Vector2>({x: 0, y: 0});

    const OnTouchStart = (e : React.TouchEvent): void => {
        if (e.touches.length == 1) {
            setIsSwipingCard(true);
            setSwipeOriginPosition({x: e.touches[0].clientX, y: e.touches[0].clientY});
            setSwipeCurrentPosition({x: e.touches[0].clientX, y: e.touches[0].clientY});

            setSwipePreviousPosition({x: cardRef.current?.style.getPropertyValue('transform').parseFloat() ?? 0, y: 0});

            if (cardRef.current) {
                stopCssAnimationOnProperty(cardRef.current, 'transform');
            }
            // Fade + rotate & add mouse events
            // Block scroll on start & unblock on end
        }
    }

    const OnTouchMove = (e : React.TouchEvent): void => {
        if (isSwipingCard) {
            if (e.touches.length == 1) {
                setSwipeCurrentPosition({x: e.touches[0].clientX, y: e.touches[0].clientY});

                cardRef.current?.style.setProperty('transform', `translateX(${swipeCurrentPosition.x - swipeOriginPosition.x + swipePreviousPosition.x}px)`);
            }
        }
    }

    const OnTouchEnd = (e : React.TouchEvent): void => {
        setIsSwipingCard(false);
        setSwipeOriginPosition({x: 0, y: 0});
        setSwipeCurrentPosition({x: 0, y: 0});

        if (cardRef.current) {
            startCssAnimation(cardRef.current, 'transform', [0], {format: 'translateX({0}px)'});
        }
    }

    return (
        <div className={SwipeCardStyle}>
            <div
                ref={cardRef as RefObject<HTMLDivElement>}
                className={SwipeCardContentStyle}
                onTouchStart={OnTouchStart}
                onTouchMove={OnTouchMove}
                onTouchEnd={OnTouchEnd}
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


const SwipeCardContentStyle = tw([
    'SwipeCardContentStyle',
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'h-full',
    'bg-white'
]);