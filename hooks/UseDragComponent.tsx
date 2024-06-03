import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useStateRef from 'react-usestateref'
import { Vector2 } from '@/utils/global/Vector2';
import { startCssAnimation, stopCssAnimationOnProperty } from '@/utils/global/CssAnimation';


export enum DragEventTypeEnum {
    Mouse = 1 << 0,  
    Touch = 1 << 1,
    Both = Mouse | Touch
}

interface UseDragComponentProps {
    eventType?: DragEventTypeEnum;
    isXAxisLocked?: boolean;
    isYAxisLocked?: boolean;
    isAutoReset?: boolean;
    duration?: number;
}

export function useDragComponent({ eventType = DragEventTypeEnum.Both, isXAxisLocked = false, isYAxisLocked = false, isAutoReset = false, duration = 250 }: UseDragComponentProps = {}) {
    // Reference closures for useCallback methods
    const [isDraggingComponent, setIsDraggingCard] = useState<boolean>(false);
    const [, setIsResetPositionOnDrop, isResetPositionOnDropRef] = useStateRef<boolean>(false);
    const [, setDragPreviousPosition, dragPreviousPositionRef] = useStateRef<Vector2>({x: 0, y: 0});
    const [, setDragOriginPosition, dragOriginPositionRef] = useStateRef<Vector2>({x: 0, y: 0});
    const [, setDragCurrentPosition, dragCurrentPositionRef] = useStateRef<Vector2>({x: 0, y: 0});

    const componentRef = useRef<HTMLElement>(null);

    // Runs only once
    useEffect(() => {
        if (componentRef == null) {
            return;
        }

        setIsResetPositionOnDrop(isAutoReset);

        if ((eventType & DragEventTypeEnum.Mouse) != 0) {
            componentRef.current?.addEventListener('mousedown', onDragStart);
        }
        if ((eventType & DragEventTypeEnum.Touch) != 0) {
            componentRef.current?.addEventListener('touchstart', onDragStart);
        }

        return () => {
            componentRef.current?.removeEventListener('mousedown', onDragStart);
            componentRef.current?.removeEventListener('touchstart', onDragStart);
        }
    }, []);

    const getClientPosition = (e : MouseEvent | TouchEvent) : Vector2 => {
        if (e instanceof MouseEvent) {
            const mouseEvent = e as MouseEvent;

            return { x: mouseEvent.clientX, y: mouseEvent.clientY }
        }
        else {
            const touchEvent = e as TouchEvent;

            if (touchEvent.touches.length != 1) {
                return { x: 0, y: 0 }
            }

            return { x: touchEvent.touches[0].clientX, y: touchEvent.touches[0].clientY }
        }
    }

    const enableDrop = () => {
        setIsResetPositionOnDrop(false);
    }

    const disableDrop = () => {
        setIsResetPositionOnDrop(true);
    }

    const onDragStart = useCallback((e : MouseEvent | TouchEvent): void => {
        if (componentRef == null) {
            return;
        }

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

        if ((eventType & DragEventTypeEnum.Mouse) != 0) {
            window.addEventListener('mousemove', onDragMove);
            window.addEventListener('mouseup', onDragEnd);
        }
        if ((eventType & DragEventTypeEnum.Touch) != 0) {
            window.addEventListener('touchmove', onDragMove);
            window.addEventListener('touchend', onDragEnd);
        }
    }, []);

    const onDragMove = useCallback((e : MouseEvent | TouchEvent): void => {
        if (componentRef == null) {
            return;
        }

        const clientPos = getClientPosition(e);

        setDragCurrentPosition({x: clientPos.x, y: clientPos.y});

        const newPositionX = isXAxisLocked ? 0 : dragCurrentPositionRef.current.x - dragOriginPositionRef.current.x + dragPreviousPositionRef.current.x;
        const newPositionY = isYAxisLocked ? 0 : dragCurrentPositionRef.current.y - dragOriginPositionRef.current.y + dragPreviousPositionRef.current.y;

        componentRef.current?.style.setProperty('transform', `translateX(${newPositionX}px) translateY(${newPositionY}px)`);
    }, []);

    const onDragEnd = useCallback((e : MouseEvent | TouchEvent): void => {
        if (componentRef == null) {
            return;
        }

        setIsDraggingCard(false);
        setDragOriginPosition({x: 0, y: 0});
        setDragCurrentPosition({x: 0, y: 0});

        if (componentRef.current && isResetPositionOnDropRef.current) {
            startCssAnimation(componentRef.current, 'transform', [0, 0], {duration, format: 'translateX({0}px) translateY({1}px)'});
        }

        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('touchmove', onDragMove);
        window.removeEventListener('mouseup', onDragEnd);
        window.removeEventListener('touchend', onDragEnd);
    }, []);
  
    return useMemo(
        () => ({
            componentRef,
            isDraggingComponent,
            enableDrop,
            disableDrop
        }),
        [componentRef, isDraggingComponent]
    );
}