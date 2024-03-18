import { useMemo, useRef, useState } from 'react';
import { useFloating, useClick, useInteractions, arrow, offset, useTransitionStatus } from '@floating-ui/react';

export const TOOLTIP_ARROW_HEIGHT = 8;
export const TOOLTIP_ARROW_RADIUS = 2;
export const TOOLTIP_GAP = 2;

export function useTooltip() {
    const [isOpen, setIsOpen] = useState(false);

    const arrowRef = useRef(null);

    const data = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "bottom",
        middleware: [
            arrow({ element: arrowRef }),
            offset(TOOLTIP_ARROW_HEIGHT + TOOLTIP_GAP)
        ]
    });

    const {getReferenceProps, getFloatingProps} = useInteractions([
        useClick(data.context, {toggle: true})
    ]);
    
    const {isMounted, status} = useTransitionStatus(data.context);
  
    return useMemo(
      () => ({
        isMounted,
        getReferenceProps,
        getFloatingProps,
        data: {
            ...data,
            status,
            arrow: arrowRef
        }
      }),
      [isMounted, getReferenceProps, getFloatingProps, data]
    );
}