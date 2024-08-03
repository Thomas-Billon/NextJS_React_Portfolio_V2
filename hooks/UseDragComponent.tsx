import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useStateRef from 'react-usestateref';
import { Vector2 } from '@/utils/global/Vector2';
import { startCssAnimation, stopCssAnimationOnProperty } from '@/utils/global/CssAnimation';


export enum DragEventTypeEnum {
    Mouse = 1 << 0,  
    Touch = 1 << 1,
    Both = Mouse | Touch
}

export interface UseDragComponentProps {
    eventType?: DragEventTypeEnum;
    isEnabled?: boolean;
    isXAxisLocked?: boolean;
    isYAxisLocked?: boolean;
    isAutoReset?: boolean;
    duration?: number;
    onDrag?: () => void;
    onDrop?: () => void;
}

export function useDragComponent({ eventType = DragEventTypeEnum.Both, isEnabled = true, isXAxisLocked = false, isYAxisLocked = false, isAutoReset = false, duration = 250, onDrag = () => {}, onDrop = () => {} }: UseDragComponentProps = {}) {
    const CSS_VARIABLE_OFFSET_X = '--tw-translate-x';
    const CSS_VARIABLE_OFFSET_Y = '--tw-translate-y';
    const CSS_PROPERTY_WIDTH = 'width';
    const CSS_PROPERTY_OVERFLOW_Y = 'overflow-y';
    const CSS_PROPERTY_TOP = 'top';
    const CSS_PROPERTY_POSITION = 'position';
    
    // Reference closures for useCallback methods
    const [isDraggingComponent, setIsDraggingCard] = useState<boolean>(false);
    const [dragOffset, setDragOffset] = useState<Vector2>({ x: 0, y: 0 });
    const [isResetPositionOnDrop, setIsResetPositionOnDrop, isResetPositionOnDropRef] = useStateRef<boolean>(false);
    const [, setIsEnabled, isEnabledRef] = useStateRef<boolean>(true);
    const [, setDragPreviousPosition, dragPreviousPositionRef] = useStateRef<Vector2>({ x: 0, y: 0 });
    const [, setDragOriginPosition, dragOriginPositionRef] = useStateRef<Vector2>({ x: 0, y: 0 });
    const [, setDragCurrentPosition, dragCurrentPositionRef] = useStateRef<Vector2>({ x: 0, y: 0 });
    const scrollPosition = useRef<number>(0);

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
        };
    }, []);

    useEffect(() => {
        setIsEnabled(isEnabled);
    }, [setIsEnabled, isEnabled]);

    const getClientPosition = (e : MouseEvent | TouchEvent) : Vector2 => {
        if (e instanceof MouseEvent) {
            const mouseEvent = e as MouseEvent;

            return { x: mouseEvent.clientX, y: mouseEvent.clientY };
        }
        else {
            const touchEvent = e as TouchEvent;

            if (touchEvent.touches.length != 1) {
                return { x: 0, y: 0 };
            }

            return { x: touchEvent.touches[0].clientX, y: touchEvent.touches[0].clientY };
        }
    };

    const enableDrop = () => {
        setIsResetPositionOnDrop(false);
    };

    const disableDrop = () => {
        setIsResetPositionOnDrop(true);
    };
    
    const enableScroll = () => {
        document.body.style.removeProperty(CSS_PROPERTY_WIDTH);
        document.body.style.removeProperty(CSS_PROPERTY_OVERFLOW_Y);
        document.body.style.removeProperty(CSS_PROPERTY_TOP);
        document.body.style.removeProperty(CSS_PROPERTY_POSITION);
        
        window.scrollTo(0, scrollPosition.current);
    };
    
    const disableScroll = () => {
        scrollPosition.current = window.scrollY;
        
        document.body.style.setProperty(CSS_PROPERTY_WIDTH, '100%');
        document.body.style.setProperty(CSS_PROPERTY_OVERFLOW_Y, 'scroll');
        document.body.style.setProperty(CSS_PROPERTY_TOP, `-${window.scrollY}px`);
        document.body.style.setProperty(CSS_PROPERTY_POSITION, 'fixed');
    };

    const onDragStart = useCallback((e : MouseEvent | TouchEvent): void => {
        if (componentRef == null) {
            return;
        }

        if (!isEnabledRef.current) {
            return;
        }

        // Only allow left click
        if (e instanceof MouseEvent && (e.buttons != 1 || e.button != 0)) {
            return;
        }

        const clientPos = getClientPosition(e);
        
        setIsDraggingCard(true);
        setDragOriginPosition({ x: clientPos.x, y: clientPos.y });
        setDragCurrentPosition({ x: clientPos.x, y: clientPos.y });

        const previousPositionX = componentRef.current?.style.getPropertyValue(CSS_VARIABLE_OFFSET_X).parseFloat();
        const previousPositionY = componentRef.current?.style.getPropertyValue(CSS_VARIABLE_OFFSET_Y).parseFloat();
        if (previousPositionX !== undefined && previousPositionY !== undefined) {
            setDragPreviousPosition({ x: previousPositionX, y: previousPositionY });
        }

        if (componentRef.current) {
            stopCssAnimationOnProperty(componentRef.current, CSS_VARIABLE_OFFSET_X);
            stopCssAnimationOnProperty(componentRef.current, CSS_VARIABLE_OFFSET_Y);
        }

        if ((eventType & DragEventTypeEnum.Mouse) != 0) {
            window.addEventListener('mousemove', onDragMove);
            window.addEventListener('mouseup', onDragEnd);
        }
        if ((eventType & DragEventTypeEnum.Touch) != 0) {
            window.addEventListener('touchmove', onDragMove);
            window.addEventListener('touchend', onDragEnd);
        }

        disableScroll();

        onDrag();
    }, []);

    const onDragMove = useCallback((e : MouseEvent | TouchEvent): void => {
        if (componentRef == null) {
            return;
        }

        if (!isEnabledRef.current) {
            return;
        }

        const clientPos = getClientPosition(e);

        setDragCurrentPosition({ x: clientPos.x, y: clientPos.y });

        const newPositionX = isXAxisLocked ? 0 : dragCurrentPositionRef.current.x - dragOriginPositionRef.current.x + dragPreviousPositionRef.current.x;
        const newPositionY = isYAxisLocked ? 0 : dragCurrentPositionRef.current.y - dragOriginPositionRef.current.y + dragPreviousPositionRef.current.y;

        componentRef.current?.style.setProperty(CSS_VARIABLE_OFFSET_X, `${newPositionX}px`);
        componentRef.current?.style.setProperty(CSS_VARIABLE_OFFSET_Y, `${newPositionY}px`);

        setDragOffset({ x: newPositionX, y: newPositionY });
    }, []);

    const onDragEnd = useCallback((e : MouseEvent | TouchEvent): void => {
        if (componentRef == null) {
            return;
        }

        if (!isEnabledRef.current) {
            return;
        }

        setIsDraggingCard(false);
        setDragOriginPosition({ x: 0, y: 0 });
        setDragCurrentPosition({ x: 0, y: 0 });

        if (componentRef.current && isResetPositionOnDropRef.current) {
            startCssAnimation(componentRef.current, CSS_VARIABLE_OFFSET_X, 0, { duration, format: '{0}px' });
            startCssAnimation(componentRef.current, CSS_VARIABLE_OFFSET_Y, 0, { duration, format: '{0}px' });
        }

        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('touchmove', onDragMove);
        window.removeEventListener('mouseup', onDragEnd);
        window.removeEventListener('touchend', onDragEnd);

        enableScroll();

        onDrop();
    }, []);
  
    return useMemo(
        () => ({
            componentRef,
            isDraggingComponent,
            dragOffset,
            isResetPositionOnDrop,
            enableDrop,
            disableDrop
        }),
        [componentRef, dragOffset, isDraggingComponent, isResetPositionOnDrop]
    );
}
