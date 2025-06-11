'use client';

import React, { createContext, RefObject, useEffect, useRef, useState } from 'react';
import { DefaultProps, IterableProps, Props } from '@/utils/react/Props';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { TimelineContext } from '@/components/history/timeline/HistoryTimeline';


type EntryContextType = {
    currentTimestampOverlayHeight: number;
};

export const EntryContext = createContext<EntryContextType>({
    currentTimestampOverlayHeight: 0
});

const HistoryTimelineEntry = ({ children, index = 0 }: Props<DefaultProps & IterableProps>): React.ReactNode => {
    const [currentTimestampOverlayHeight, setCurrentTimestampOverlayHeight] = useState<number>(0);
    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

    const entryRef = useRef<HTMLElement>(null);

    const timelineContext = useCustomContext(TimelineContext);

    useEffect(() => {
        const entryHeight = entryRef.current?.clientHeight ?? 0;
        const entryOffsetY = entryRef.current?.offsetTop ?? 0;

        if (entryOffsetY <= timelineContext.currentProgressBarHeight && timelineContext.currentProgressBarHeight <= (entryOffsetY + entryHeight)) {
            let targetTimestampOverlayHeight = timelineContext.currentProgressBarHeight - entryOffsetY;
            
            targetTimestampOverlayHeight = Math.max(targetTimestampOverlayHeight, 0);
            targetTimestampOverlayHeight = Math.min(targetTimestampOverlayHeight, entryHeight);
            
            setCurrentTimestampOverlayHeight(targetTimestampOverlayHeight);
            setIsHighlighted(true);
        }
        else if (timelineContext.currentProgressBarHeight < entryOffsetY) {
            setCurrentTimestampOverlayHeight(0);
            setIsHighlighted(false);
        }
        else if (timelineContext.currentProgressBarHeight > (entryOffsetY + entryHeight)) {
            setCurrentTimestampOverlayHeight(entryHeight);
            setIsHighlighted(false);
        }
    }, [timelineContext, timelineContext.currentProgressBarHeight]);

    return (
        <EntryContext.Provider value={{ currentTimestampOverlayHeight: currentTimestampOverlayHeight }}>
            <li ref={entryRef as RefObject<HTMLLIElement>} className={styles.HistoryTimelineEntryStyle({ isHighlighted })}>
                {children}
            </li>
        </EntryContext.Provider>
    );
};

export default HistoryTimelineEntry;


const styles = tw({
    HistoryTimelineEntryStyle: ({ isHighlighted }: {
        isHighlighted: boolean
    }) => [
        isHighlighted && 'group/is-highlighted'
    ]
});
