'use client';

import React from 'react';
import { FloatingArrow } from '@floating-ui/react';
import { TooltipContext } from '@/components/shared/tooltip/TooltipContainer';
import { TOOLTIP_ARROW_WIDTH, TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_RADIUS } from '@/hooks/UseTooltip';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { isBreakpointSmDown } from '@/hooks/UseBreakpoint';
import { tw } from '@/utils/tailwind/TinyWind';

import Variables from '@/styles/scss/variables.module.scss';


const TooltipBubble = ({ content }: { content: string }): React.ReactNode => {
    const tooltipContext = useCustomContext(TooltipContext);

    const isSmDown = isBreakpointSmDown();
    const isClosed = tooltipContext.data.status == 'close' || tooltipContext.data.status== 'unmounted';

    return (
        <>
            {
                tooltipContext.isMounted &&
                <div
                    className={styles.TooltipBubbleContainerStyle({ isSmDown })}
                    style={tooltipContext.data.floatingStyles}
                    ref={tooltipContext.data.refs.setFloating}
                    {...tooltipContext.getFloatingProps()}
                >
                    <div
                        className={styles.TooltipBubbleStyle({ isClosed })}
                        style={{ backgroundColor: Variables.gray800 }}
                    >
                        <span dangerouslySetInnerHTML={{ __html: content }}></span>
                        <FloatingArrow
                            className={styles.TooltipBubbleArrowStyle}
                            ref={tooltipContext.data.arrowRef}
                            context={tooltipContext.data.context}
                            fill={Variables.gray800}
                            width={TOOLTIP_ARROW_WIDTH}
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


const styles = tw({
    TooltipBubbleContainerStyle: ({ isSmDown }: {
        isSmDown: boolean
    }) => [
        'z-100',
        isSmDown && '!fixed',
        isSmDown && '!top-4',
        isSmDown && '!left-1/2',
        isSmDown && '!-translate-x-1/2',
        isSmDown && 'container'
    ],

    TooltipBubbleStyle: ({ isClosed }: {
        isClosed: boolean
    }) => [
        'px-6',
        'py-2',
        'md:px-2',
        'md:py-1',
        'text-white',
        'text-sm',
        'rounded',
        'drop-shadow-md',
        'cursor-default',
        'select-none',
        'transition-all',
        isClosed && 'opacity-0',
        isClosed && 'scale-50',
        isClosed && '-translate-y-1/2'
    ],

    TooltipBubbleArrowStyle: [
        '!translate-y-px',
        '!rotate-180',
        'hidden',
        'md:block'
    ]
});
