// use server

import React, { ReactNode } from 'react';
import { historyProps as props } from './HistoryProps';
import { tw } from '@/utils/tailwind/TinyWind';
import HistoryTimeline from '@/components/history/timeline/HistoryTimeline';
import HistoryTimelineEvent from '@/components/history/timeline/HistoryTimelineEvent';
import HistoryNode from '@/components/history/card/HistoryNode';


const History = (): ReactNode => {
    return (
        <section id="history" className={HistoryStyle}>
            <HistoryTimeline>
                {
                    props.eventProps.map((event, index) =>
                        <HistoryTimelineEvent key={index}>
                            <HistoryNode {...{ props: event }}/>
                        </HistoryTimelineEvent>
                    )
                }
            </HistoryTimeline>
        </section>
    );
};

export default History;


const HistoryStyle = tw([
    'HistoryStyle',
    'overflow-hidden',
    'bg-off-white'
]);
