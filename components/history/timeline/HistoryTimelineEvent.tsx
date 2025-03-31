'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { DefaultProps, IterableProps, Props } from '@/utils/react/Props';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { TimelineContext } from '@/components/history/timeline/HistoryTimeline';


const HistoryTimelineEvent = ({ children, index = 0 }: Props<DefaultProps & IterableProps>): React.ReactNode => {
    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

    const eventRef = useRef<HTMLElement>(null);

    const timelineContext = useCustomContext(TimelineContext);

    useEffect(() => {
        const eventOffsetY = eventRef.current?.offsetTop ?? 0;
        const eventHeight = eventRef.current?.getBoundingClientRect()?.height ?? 0;

        if (eventOffsetY <= timelineContext.currentProgressBarHeight && timelineContext.currentProgressBarHeight <= (eventOffsetY + eventHeight)) {
            setIsHighlighted(true);
        }
        else {
            setIsHighlighted(false);
        }
    }, [timelineContext.currentProgressBarHeight]);

    return (
        <li ref={eventRef as RefObject<HTMLLIElement>} className={HistoryTimelineEventStyle({ isHighlighted })}>
            {children}
        </li>
    );
};

export default HistoryTimelineEvent;


const HistoryTimelineEventStyle = ({ isHighlighted }: { isHighlighted: boolean }) => tw([
    'HistoryTimelineEventStyle',
    'py-2',
    'first:pt-0',
    'last:pb-0',
    isHighlighted && 'group/is-highlighted'
]);
