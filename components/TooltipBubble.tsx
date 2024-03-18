'use client';

import React, { useEffect } from 'react';
import { FloatingArrow } from '@floating-ui/react';
import { useTooltipContext } from '@/components/TooltipContainer';
import { DefaultProps } from '@/utils/React/Props';
import { tw } from '@/utils/Tailwind/TinyWind';

import Variables from '@/styles/scss/variables.module.scss';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_RADIUS } from '@/hooks/UseTooltip';


const TooltipBubble = ({ children }: DefaultProps): React.ReactNode => {
    const tooltipContext = useTooltipContext();

    useEffect(() => {
        console.log(tooltipContext.data.status);
    }, [tooltipContext.data.status])

    return(
        <>
            {
                tooltipContext.isMounted &&
                <div
                    style={tooltipContext.data.floatingStyles}
                    ref={tooltipContext.data.refs.setFloating}
                    {...tooltipContext.getFloatingProps()}
                >
                    <div className={TooltipBubbleStyle({ isClosed: tooltipContext.data.status == 'close' || tooltipContext.data.status== 'unmounted' })}>
                        {children}
                        <FloatingArrow
                            ref={tooltipContext.data.arrow}
                            context={tooltipContext.data.context}
                            fill={Variables.gray800}
                            height={TOOLTIP_ARROW_HEIGHT}
                            tipRadius={TOOLTIP_ARROW_RADIUS}
                        />
                    </div>
                </div>
            }
        </>
    );
};

export default TooltipBubble;


const TooltipBubbleStyle = ({isClosed}: {isClosed: boolean}) => tw([
    'TooltipBubbleStyle',
    'px-2',
    'py-1',
    'bg-gray-800',
    'text-white',
    'text-sm',
    'rounded',
    'transition-all',
    isClosed && 'opacity-0',
    isClosed && 'scale-50',
    isClosed && '-translate-y-1/2'
]);