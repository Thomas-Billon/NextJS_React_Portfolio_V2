'use client';

import React, { createContext, RefObject, useEffect, useRef, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';
import { useWindowScroll } from '@/hooks/UseWindowScroll';
import { useWindowSize } from '@/hooks/UseWindowSize';


export const TimelineContext = createContext({
    currentProgressBarHeight: 0
});

const HistoryTimeline = ({ children }: Props<DefaultProps>): React.ReactNode => {
    const [currentProgressBarHeight, setCurrentProgressBarHeight] = useState<number>(0);
    
    const historySectionRef = useRef<HTMLElement>(null);
    const progressBarRef = useRef<HTMLElement>(null);

    const windowSize = useWindowSize();
    const windowScroll = useWindowScroll();

    const timelineProgressPercentageTarget = 45;
    
    useEffect(() => {
        const currentHeight = windowSize.height ?? 0;
        const currentScrollY = windowScroll.y ?? 0;

        const historySectionHeight = historySectionRef.current?.clientHeight ?? 0;
        const historySectionOffsetY = historySectionRef.current?.offsetTop ?? 0;
        const progressBarOffsetY = historySectionOffsetY - currentScrollY;

        let targetProgressBarHeight = (currentHeight * timelineProgressPercentageTarget / 100) - progressBarOffsetY;

        targetProgressBarHeight = Math.max(targetProgressBarHeight, 0);
        targetProgressBarHeight = Math.min(targetProgressBarHeight, historySectionHeight);

        setCurrentProgressBarHeight(targetProgressBarHeight);

        if (progressBarRef.current) {
            progressBarRef.current.style.height = targetProgressBarHeight + 'px';
        }
    }, [windowSize, windowScroll]);

    return (
        <TimelineContext.Provider value={{ currentProgressBarHeight: currentProgressBarHeight }}>
            <div ref={historySectionRef as RefObject<HTMLDivElement>} id="history-timeline" className={styles.HistoryTimelineStyle}>
                <div className={styles.HistoryTimelineProgressBarContainerStyle}>
                    <div ref={progressBarRef as RefObject<HTMLDivElement>} className={styles.HistoryTimelineProgressBarFillerStyle}></div>
                </div>
                <ul className={styles.HistoryTimelineListStyle}>
                    {children}
                </ul>
            </div>
        </TimelineContext.Provider>
    );
};

export default HistoryTimeline;


const styles = tw({
    HistoryTimelineStyle: [
        'container-section',
        'relative'
    ],

    HistoryTimelineListStyle: [
    ],

    HistoryTimelineProgressBarContainerStyle: [
        'center-h',
        'top-0',
        'bottom-0',
        'w-1',
        'bg-gray-200',
        'pointer-events-none'
    ],

    HistoryTimelineProgressBarFillerStyle: [
        'bg-orange-light-400',
        'transition-[height]'
    ]
});
