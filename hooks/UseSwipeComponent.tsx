import { useEffect, useMemo } from 'react';
import { UseDragComponentProps, useDragComponent } from '@/hooks/UseDragComponent';
import { startCssAnimation, stopCssAnimationOnProperty } from '@/utils/global/CssAnimation';


export interface UseSwipeComponentProps extends UseDragComponentProps {
    distance?: number;
}

export function useSwipeComponent({ distance = 200, eventType, isXAxisLocked, isYAxisLocked, isAutoReset, duration }: UseSwipeComponentProps = {}) {
    const CSS_PROPERTY_OPACITY = 'opacity';
    
    const dragComponent = useDragComponent({eventType, isXAxisLocked, isYAxisLocked, isAutoReset, duration});

    // Runs each time component is dragged
    useEffect(() => {
        if (dragComponent.isDraggingComponent) {
            if (dragComponent.dragOffset.x != 0 || dragComponent.dragOffset.y != 0) {
                const opacityX = Math.abs(dragComponent.dragOffset.x) / distance;
                const opacityY = Math.abs(dragComponent.dragOffset.y) / distance;
        
                const opacity = 1 - Math.min(Math.max(opacityX, opacityY), 1);
        
                dragComponent.componentRef.current?.style.setProperty('opacity', opacity.toString());
            }
        }
    }, [dragComponent.dragOffset]);

    // Runs each time the component is picked / dropped
    useEffect(() => {
        // If picked
        if (dragComponent.isDraggingComponent) {
            if (dragComponent.dragOffset.x != 0 || dragComponent.dragOffset.y != 0) {
                if (dragComponent.componentRef.current) {
                    stopCssAnimationOnProperty(dragComponent.componentRef.current, CSS_PROPERTY_OPACITY);
                }
            }
        }
        // If dropped
        else {
            if (dragComponent.dragOffset.x != 0 || dragComponent.dragOffset.y != 0) {
                if (dragComponent.componentRef.current) {
                    startCssAnimation(dragComponent.componentRef.current, CSS_PROPERTY_OPACITY, 1, {duration, format: '{0}'});
                }
            }
        }
    }, [dragComponent.isDraggingComponent]);

    return useMemo(
        () => ({
            ...dragComponent
        }),
        [dragComponent]
    );
}