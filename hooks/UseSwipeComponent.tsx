import { useEffect, useMemo, useState } from 'react';
import { UseDragComponentProps, useDragComponent } from '@/hooks/UseDragComponent';
import { startCssAnimation, stopCssAnimationOnProperty } from '@/utils/global/CssAnimation';


export interface UseSwipeComponentProps extends UseDragComponentProps {
    threshold?: number;
    distance?: number;
    rotation?: number;
    onComplete?: () => void;
}

export function useSwipeComponent({ threshold = 100, distance = 200, rotation = 10, onComplete = () => {}, eventType, isXAxisLocked, isYAxisLocked, isAutoReset, duration = 250, onDrag, onDrop }: UseSwipeComponentProps = {}) {
    const CSS_VARIABLE_OFFSET_X = '--tw-translate-x';
    const CSS_VARIABLE_ROTATE = '--tw-rotate';
    const CSS_PROPERTY_OPACITY = 'opacity';
    
    const dragComponent = useDragComponent({ eventType, isXAxisLocked, isYAxisLocked, isAutoReset, duration, onDrag, onDrop });

    // Runs each time component is dragged
    useEffect(() => {
        if (dragComponent.isDraggingComponent) {
            if (dragComponent.dragOffset.x != 0 || dragComponent.dragOffset.y != 0) {
                updateSwipe();
            }
        }
    }, [dragComponent.dragOffset]);

    // Runs each time the component is picked / dropped
    useEffect(() => {
        // If picked
        if (dragComponent.isDraggingComponent) {
            if (dragComponent.dragOffset.x != 0 || dragComponent.dragOffset.y != 0) {
                startSwipe();
            }
        }
        // If dropped
        else {
            if (dragComponent.dragOffset.x != 0 || dragComponent.dragOffset.y != 0) {
                if (isCrossedThreshold()) {
                    completeSwipe();
                }
                else {
                    cancelSwipe();
                }
            }
        }
    }, [dragComponent.isDraggingComponent]);

    const isCrossedThreshold = () => {
        return Math.abs(dragComponent.dragOffset.x) >= threshold || Math.abs(dragComponent.dragOffset.y) >= threshold;
    };

    const isReachedDistance = () => {
        return Math.abs(dragComponent.dragOffset.x) >= distance || Math.abs(dragComponent.dragOffset.y) >= distance;
    };

    const startSwipe = () => {
        if (!dragComponent.isResetPositionOnDrop) {
            dragComponent.disableDrop();
        }

        if (dragComponent.componentRef.current) {
            stopCssAnimationOnProperty(dragComponent.componentRef.current, CSS_PROPERTY_OPACITY);
            stopCssAnimationOnProperty(dragComponent.componentRef.current, CSS_VARIABLE_ROTATE);
        }
    };

    const updateSwipe = () => {
        if (isCrossedThreshold() && dragComponent.isResetPositionOnDrop) {
            dragComponent.enableDrop();
        }

        // Tilt
        const rotationTarget = dragComponent.dragOffset.x * rotation / distance;

        dragComponent.componentRef.current?.style.setProperty(CSS_VARIABLE_ROTATE, `${rotationTarget}deg`);
        
        // Opacity
        const opacityX = Math.abs(dragComponent.dragOffset.x) / distance;
        const opacityY = Math.abs(dragComponent.dragOffset.y) / distance;

        const opacityTarget = 1 - Math.min(Math.max(opacityX, opacityY), 1);

        dragComponent.componentRef.current?.style.setProperty(CSS_PROPERTY_OPACITY, opacityTarget.toString());
    };

    const cancelSwipe = () => {
        if (dragComponent.componentRef.current) {
            startCssAnimation(dragComponent.componentRef.current, CSS_VARIABLE_ROTATE, 0, { duration, format: '{0}deg' });
            startCssAnimation(dragComponent.componentRef.current, CSS_PROPERTY_OPACITY, 1, { duration, format: '{0}' });
        }
    };

    const completeSwipe = () => {
        if (dragComponent.componentRef.current) {
            const opacityBufferDuration = 10; // Additional buffer to avoid visual glitches
            const autoCompleteDuration = isReachedDistance() ? 0 : duration;
            const autoCompleteDirection = dragComponent.dragOffset.x / Math.abs(dragComponent.dragOffset.x);

            startCssAnimation(dragComponent.componentRef.current, CSS_VARIABLE_OFFSET_X, distance * autoCompleteDirection, {
                duration: autoCompleteDuration, format: '{0}px',
                onComplete: () => {
                    resetPosition();
                }
            });
            startCssAnimation(dragComponent.componentRef.current, CSS_VARIABLE_ROTATE, rotation * autoCompleteDirection, {
                duration: autoCompleteDuration, format: '{0}deg',
                onComplete: () => {
                    resetRotation();
                }
            });
            startCssAnimation(dragComponent.componentRef.current, CSS_PROPERTY_OPACITY, 0, {
                duration: autoCompleteDuration + opacityBufferDuration, format: '{0}',
                onComplete: () => {
                    resetOpacity();
                }
            });

            setTimeout(() => {
                onComplete();
            }, autoCompleteDuration);
        }
    };

    const swipeLeft = () => {
        resetPosition();
        resetRotation();
        resetOpacity();

        dragComponent.dragOffset.x = -1;

        completeSwipe();
    };

    const swipeRight = () => {
        resetPosition();
        resetRotation();
        resetOpacity();

        dragComponent.dragOffset.x = 1;

        completeSwipe();
    };

    const resetPosition = () => {
        dragComponent.componentRef.current?.style.setProperty(CSS_VARIABLE_OFFSET_X, '0px');
    };

    const resetRotation = () => {
        dragComponent.componentRef.current?.style.setProperty(CSS_VARIABLE_ROTATE, '0deg');
    };

    const resetOpacity = () => {
        dragComponent.componentRef.current?.style.setProperty(CSS_PROPERTY_OPACITY, '1');
    };

    return useMemo(
        () => ({
            ...dragComponent,
            swipeLeft,
            swipeRight
        }),
        [dragComponent]
    );
}
