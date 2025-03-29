// use server

import React, { ReactNode } from 'react';
import { historyProps as props } from './HistoryProps';
import { tw } from '@/utils/tailwind/TinyWind';
import HistoryCard from '@/components/history/card/HistoryCard';
import HistoryTimeline from '@/components/history/timeline/HistoryTimeline';
import HistoryTimelineEvent from '@/components/history/timeline/HistoryTimelineEvent';


const History = (): ReactNode => {
    return (
        <section id="history" className={HistoryStyle}>
            <HistoryTimeline>
                {
                    props.eventProps.map((event, index) =>
                        <HistoryTimelineEvent key={index} index={index}>
                            <HistoryCard {...{ props: event }}/>
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
