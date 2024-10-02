'use client';

import React from 'react';
import { DefaultProps, Props } from '@/utils/react/Props';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { TimelineContext } from '@/components/history/timeline/HistoryTimeline';


const HistoryTimelineEvent = ({ children }: Props<DefaultProps>): React.ReactNode => {
    const timelineContext = useCustomContext(TimelineContext);

    return (
        <li className={HistoryTimelineEventStyle}>
            {children}
        </li>
    );
};

export default HistoryTimelineEvent;


const HistoryTimelineEventStyle = tw([
    'HistoryTimelineEventStyle'
]);
