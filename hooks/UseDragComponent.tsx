import { useEffect, useMemo, useRef, useState } from 'react';
import { Vector2 } from '@/utils/global/Vector2';
import { startCssAnimation, stopCssAnimationOnProperty } from '@/utils/global/CssAnimation';


interface UseDragComponentProps {
    isXAxisLocked?: boolean;
    isYAxisLocked?: boolean;
    isAutoReset?: boolean;
    duration?: number;
}

export function useDragComponent({ isXAxisLocked = false, isYAxisLocked = false, isAutoReset = false, duration = 250 }: UseDragComponentProps = {}) {
    const [isDraggingComponent, setIsDraggingCard] = useState<boolean>(false);
    const [isResetPositionOnDrop, setIsResetPositionOnDrop] = useState<boolean>(false);
    const [dragPreviousPosition, setDragPreviousPosition] = useState<Vector2>({x: 0, y: 0});
    const [dragOriginPosition, setDragOriginPosition] = useState<Vector2>({x: 0, y: 0});
    const [dragCurrentPosition, setDragCurrentPosition] = useState<Vector2>({x: 0, y: 0});

    const componentRef = useRef<HTMLElement>(null);

    const getClientPosition = (e : React.MouseEvent | React.TouchEvent) : Vector2 => {
        if (e.nativeEvent instanceof MouseEvent) {
            const mouseEvent = e as React.MouseEvent;

            return { x: mouseEvent.clientX, y: mouseEvent.clientY }
        }
        else {
            const touchEvent = e as React.TouchEvent;

            if (touchEvent.touches.length != 1) {
                return { x: 0, y: 0 }
            }

            return { x: touchEvent.touches[0].clientX, y: touchEvent.touches[0].clientY }
        }
    }

    useEffect(() => {
        setIsResetPositionOnDrop(isAutoReset);
    }, []);

    const enableDrop = () => {
        setIsResetPositionOnDrop(false);
    }

    const disableDrop = () => {
        setIsResetPositionOnDrop(true);
    }

    const onDragStart = (e : React.MouseEvent | React.TouchEvent): void => {
        const clientPos = getClientPosition(e);
        
        setIsDraggingCard(true);
        setDragOriginPosition({x: clientPos.x, y: clientPos.y});
        setDragCurrentPosition({x: clientPos.x, y: clientPos.y});

        const previousPosition = componentRef.current?.style.getPropertyValue('transform').parseFloatArray()
        if (previousPosition && previousPosition.length >= 2) {
            setDragPreviousPosition({x: previousPosition[0], y: previousPosition[1]});
        }

        if (componentRef.current) {
            stopCssAnimationOnProperty(componentRef.current, 'transform');
        }
    }

    const onDragMove = (e : React.MouseEvent | React.TouchEvent): void => {
        const clientPos = getClientPosition(e);

        if (isDraggingComponent) {
            setDragCurrentPosition({x: clientPos.x, y: clientPos.y});

            const newPositionX = isXAxisLocked ? 0 : dragCurrentPosition.x - dragOriginPosition.x + dragPreviousPosition.x;
            const newPositionY = isYAxisLocked ? 0 : dragCurrentPosition.y - dragOriginPosition.y + dragPreviousPosition.y;

            componentRef.current?.style.setProperty('transform', `translateX(${newPositionX}px) translateY(${newPositionY}px)`);
        }
    }

    const onDragEnd = (e : React.MouseEvent | React.TouchEvent): void => {
        setIsDraggingCard(false);
        setDragOriginPosition({x: 0, y: 0});
        setDragCurrentPosition({x: 0, y: 0});

        if (componentRef.current && isResetPositionOnDrop) {
            startCssAnimation(componentRef.current, 'transform', [0, 0], {duration, format: 'translateX({0}px) translateY({1}px)'});
        }
    }
  
    return useMemo(
        () => ({
            isDraggingCard: isDraggingComponent,
            enableDrop,
            disableDrop,
            onDragStart,
            onDragMove,
            onDragEnd,
            componentRef
        }),
        [isDraggingComponent, isResetPositionOnDrop, dragPreviousPosition, dragOriginPosition, dragCurrentPosition, componentRef]
    );
}