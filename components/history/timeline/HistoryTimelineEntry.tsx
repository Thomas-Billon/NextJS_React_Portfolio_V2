'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { DefaultProps, IterableProps, Props } from '@/utils/react/Props';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { TimelineContext } from '@/components/history/timeline/HistoryTimeline';


const HistoryTimelineEntry = ({ children, index = 0 }: Props<DefaultProps & IterableProps>): React.ReactNode => {
    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

    const entryRef = useRef<HTMLElement>(null);

    const timelineContext = useCustomContext(TimelineContext);

    useEffect(() => {
        const entryOffsetY = entryRef.current?.offsetTop ?? 0;
        const entryHeight = entryRef.current?.getBoundingClientRect()?.height ?? 0;

        if (entryOffsetY <= timelineContext.currentProgressBarHeight && timelineContext.currentProgressBarHeight <= (entryOffsetY + entryHeight)) {
            setIsHighlighted(true);

            let targetTimelineEntryBackgroundHeight = timelineContext.currentProgressBarHeight - entryOffsetY;
            
            targetTimelineEntryBackgroundHeight = Math.max(targetTimelineEntryBackgroundHeight, 0);
            targetTimelineEntryBackgroundHeight = Math.min(targetTimelineEntryBackgroundHeight, entryHeight);
            
            timelineContext.setCurrentTimelineEntryBackgroundHeight(targetTimelineEntryBackgroundHeight);
        }
        else {
            setIsHighlighted(false);
        }
    }, [timelineContext, timelineContext.currentProgressBarHeight]);

    return (
        <li ref={entryRef as RefObject<HTMLLIElement>} className={styles.HistoryTimelineEntryStyle({ isHighlighted })}>
            {children}
        </li>
    );
};

export default HistoryTimelineEntry;


const styles = tw({
    HistoryTimelineEntryStyle: ({ isHighlighted }: {
        isHighlighted: boolean
    }) => [
        'py-2',
        'first:pt-0',
        'last:pb-0',
        isHighlighted && 'group/is-highlighted'
    ]
});
