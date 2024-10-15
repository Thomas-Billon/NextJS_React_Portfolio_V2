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
            {children}
        </li>
    );
};

export default HistoryTimelineEvent;


const HistoryTimelineEventStyle = ({ isEventIndexOdd }: { isEventIndexOdd: boolean }) => tw([
    'HistoryTimelineEventStyle',
    !isEventIndexOdd && 'group/left',
    isEventIndexOdd && 'group/right'
]);
