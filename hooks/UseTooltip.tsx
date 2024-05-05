import { useMemo, useRef, useState } from 'react';
import { useFloating, useClick, useInteractions, arrow, offset, useTransitionStatus, autoUpdate } from '@floating-ui/react';


export const TOOLTIP_MS_PER_CHARACTER = 80;
export const TOOLTIP_MINIMUM_TIMEOUT = 3000;
export const TOOLTIP_ARROW_WIDTH = 16;
export const TOOLTIP_ARROW_HEIGHT = 8;
export const TOOLTIP_ARROW_RADIUS = 0;
export const TOOLTIP_GAP = 2;

interface UseTooltipProps {
    isToggle?: boolean;
}

export function useTooltip({ isToggle = false }: UseTooltipProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

    const arrowRef = useRef(null);

    const changeOpenState = (value: boolean) => {
        // If tooltip needs to be manually open, we only handle closing
        if (!isToggle) {
            if (!value) {
                closeTooltip();
            }
        }
        else {
            setTooltip(value);
        }
    };

    const toggleTooltip = () => setTooltip(!isOpen);

    const setTooltip = (value: boolean) => {
        if (value) {
            openTooltip();
        }
        else {
            closeTooltip();
        }
    };

    const openTooltip = () => {
        setIsOpen(true);

        if (!isToggle) {
            // Automatically close after N ms based on tooltip text length (100ms / character)
            setTimeout(() => {
                const textLength = data.refs.floating.current?.innerText.length ?? 100;

                let timeoutValue = textLength * TOOLTIP_MS_PER_CHARACTER;
                if (timeoutValue < TOOLTIP_MINIMUM_TIMEOUT) {
                    timeoutValue = TOOLTIP_MINIMUM_TIMEOUT;
                }

                const newTimeoutId = setTimeout(() => {
                    closeTooltip();
                }, timeoutValue);

                clearTimeout(timeoutId);
                setTimeoutId(newTimeoutId);
            }, 0);
        }
    }

    const closeTooltip = () => {
        setIsOpen(false);
                    
        const button = data.refs.reference.current as HTMLElement;
        button.blur();
    }

    const data = useFloating({
        whileElementsMounted: autoUpdate,
        open: isOpen,
        onOpenChange: changeOpenState,
        placement: 'bottom',
        middleware: [
            arrow({ element: arrowRef }),
            offset(TOOLTIP_ARROW_HEIGHT + TOOLTIP_GAP)
        ]
    });

    const {getReferenceProps, getFloatingProps} = useInteractions([
        useClick(data.context, {toggle: isToggle})
    ]);
    
    const {isMounted, status} = useTransitionStatus(data.context);
  
    return useMemo(
      () => ({
        isMounted,
        toggleTooltip,
        openTooltip,
        closeTooltip,
        getReferenceProps,
        getFloatingProps,
        data: {
            ...data,
            status,
            arrow: arrowRef
        }
      }),
      [isMounted, toggleTooltip, openTooltip, closeTooltip, getReferenceProps, getFloatingProps, data]
    );
}