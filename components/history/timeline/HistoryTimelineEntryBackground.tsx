'use client';

import React, { RefObject, useEffect, useRef } from 'react';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { TimelineContext } from '@/components/history/timeline/HistoryTimeline';


const HistoryTimelineEntry = (): React.ReactNode => {
    const entryBackgroundRef = useRef<HTMLElement>(null);

    const timelineContext = useCustomContext(TimelineContext);

    useEffect(() => {
        if (entryBackgroundRef.current) {
            entryBackgroundRef.current.style.height = `${timelineContext.currentTimelineEntryBackgroundHeight}px`;
        }
    }, [timelineContext, timelineContext.currentTimelineEntryBackgroundHeight]);

    return (
        <div ref={entryBackgroundRef as RefObject<HTMLDivElement>} className={styles.HistoryTimelineEntryBackgroundStyle}></div>
    );
};

export default HistoryTimelineEntry;


const styles = tw({
    HistoryTimelineEntryBackgroundStyle: [
        'absolute',
        'z-1',
        '-top-2',
        'left-0',
        'bg-orange-light-400',
        'w-full',
        'transition-[height]'
    ]
});
