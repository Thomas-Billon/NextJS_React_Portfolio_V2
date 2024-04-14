'use client';

import React, { createContext, useContext } from 'react';
import { DefaultProps } from '@/utils/React/Props';
import { useTooltip } from '@/hooks/UseTooltip';

export const TooltipContext = createContext<ReturnType<typeof useTooltip> | null>(null);

export const useTooltipContext = (): ReturnType<typeof useTooltip> => {
    const context = useContext(TooltipContext);

    if (context == null) {
        throw new Error("Tooltip components must be wrapped in <TooltipContainer />");
    }

    return context;
}

const TooltipContainer = ({ children }: DefaultProps): React.ReactNode => {
    const tooltip = useTooltip({ isToggle: false });

    return(
        <TooltipContext.Provider value={tooltip}>
            {children}
        </TooltipContext.Provider>
    );
};

export default TooltipContainer;