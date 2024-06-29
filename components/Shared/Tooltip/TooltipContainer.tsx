'use client';

import React, { createContext } from 'react';
import { DefaultProps } from '@/utils/react/Props';
import { useTooltip } from '@/hooks/UseTooltip';

export const TooltipContext = createContext<ReturnType<typeof useTooltip> | null>(null);

const TooltipContainer = ({ children }: DefaultProps): React.ReactNode => {
    const tooltip = useTooltip({ isToggle: false });

    return (
        <TooltipContext.Provider value={tooltip}>
            {children}
        </TooltipContext.Provider>
    );
};

export default TooltipContainer;
