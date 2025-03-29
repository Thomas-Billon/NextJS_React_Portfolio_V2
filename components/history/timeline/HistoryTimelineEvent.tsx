'use client';

import React from 'react';
import { DefaultProps, IterableProps, Props } from '@/utils/react/Props';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { TimelineContext } from '@/components/history/timeline/HistoryTimeline';


const HistoryTimelineEvent = ({ children, index = 0 }: Props<DefaultProps & IterableProps>): React.ReactNode => {
    const timelineContext = useCustomContext(TimelineContext);
    const isEventIndexOdd = index % 2 > 0;

    return (
        <li className={HistoryTimelineEventStyle({ isEventIndexOdd })}>
            <div className={HistoryTimelineEventContainerBarStyle({ isEventIndexOdd })}></div>
            {children}
        </li>
    );
};

export default HistoryTimelineEvent;


const HistoryTimelineEventStyle = ({ isEventIndexOdd }: { isEventIndexOdd: boolean }) => tw([
    'HistoryTimelineEventStyle',
    'relative',
    !isEventIndexOdd && 'group/left',
    isEventIndexOdd && 'group/right'
]);

const HistoryTimelineEventContainerBarStyle = ({ isEventIndexOdd }: { isEventIndexOdd: boolean }) => tw([
    'HistoryTimelineEventContainerBarStyle',
    'absolute',
    'w-0.5',
    'h-32',
    '-top-32',
    'bg-[url("/static/images/history/history_line.png")]',
    'bg-fixed',
    'bg-[length:100vw_50vh]',
    'bg-top',
    'bg-no-repeat',
    !isEventIndexOdd && 'left-60',
    isEventIndexOdd && 'right-60'
]);
