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
    
    const progressBarRef = useRef<HTMLElement>(null);

    const windowSize = useWindowSize();
    const windowScroll = useWindowScroll();

    const timelineProgressPercentageTarget = 50;
    
    useEffect(() => {
        const currentHeight = windowSize.height ?? 0;

        const progressBarRect = progressBarRef.current?.getBoundingClientRect();
        const progressBarHeight = progressBarRect?.height ?? 0;
        const progressBarOffsetY = progressBarRect?.top ?? 0;

        let targetProgressBarHeight = (currentHeight * timelineProgressPercentageTarget / 100) - progressBarOffsetY;

        if (targetProgressBarHeight < 0) {
            targetProgressBarHeight = 0;
        }

        if (targetProgressBarHeight > progressBarHeight) {
            targetProgressBarHeight = progressBarHeight;
        }

        setCurrentProgressBarHeight(targetProgressBarHeight);
    }, [windowSize, windowScroll]);

    return (
        <TimelineContext.Provider value={{ currentProgressBarHeight: currentProgressBarHeight }}>
            <div id="history-timeline" className={HistoryTimelineStyle}>
                <ul className={HistoryTimelineListStyle}>
                    {children}
                </ul>
                <div className={HistoryTimelineProgressBarAreaStyle}>
                    <div className={HistoryTimelineProgressBarContainerStyle}>
                        <div ref={progressBarRef as RefObject<HTMLDivElement>} className={HistoryTimelineProgressBarStyle}></div>
                    </div>
                </div>
            </div>
        </TimelineContext.Provider>
    );
};

export default HistoryTimeline;


const HistoryTimelineStyle = tw([
    'HistoryTimelineStyle',
    'container-section',
    'relative'
]);

const HistoryTimelineListStyle = tw([
    'HistoryTimelineListStyle'
]);

const HistoryTimelineProgressBarAreaStyle = tw([
    'absolute',
    'top-0',
    'bottom-0',
    'container',
    'pointer-events-none'
]);

const HistoryTimelineProgressBarContainerStyle = tw([
    'relative',
    '-left-8',
    'h-full'
]);

const HistoryTimelineProgressBarStyle = tw([
    'HistoryTimelineProgressBarStyle',
    'absolute',
    'left-[calc(25%-0.125rem)]',
    'top-0',
    'bottom-0',
    'w-1',
    'bg-gray-200',
    'bg-[url("/static/images/history/history_line.png")]',
    'bg-fixed',
    'bg-[length:100vw_50vh]',
    'bg-top',
    'bg-no-repeat'
]);
