'use client';

import React, { createContext, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { DefaultProps, Props } from '@/utils/react/Props';


export const TimelineContext = createContext({
});

const HistoryTimeline = ({ children }: Props<DefaultProps>): React.ReactNode => {

    return (
        <TimelineContext.Provider value={{}}>
            <ul id="history-timeline" className={HistoryTimelineStyle}>
                {children}
            </ul>
        </TimelineContext.Provider>
    );
};

export default HistoryTimeline;


const HistoryTimelineStyle = tw([
    'HistoryTimelineStyle',
    'container-section',
    'flex',
    'flex-col',
    'gap-32'
]);
