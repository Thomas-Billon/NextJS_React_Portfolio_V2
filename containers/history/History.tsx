// use server

import React, { ReactNode } from 'react';
import { historyProps as props } from './HistoryProps';
import { tw } from '@/utils/tailwind/TinyWind';
import HistoryTimeline from '@/components/history/timeline/HistoryTimeline';
import HistoryTimelineEntry from '@/components/history/timeline/HistoryTimelineEntry';
import HistoryEvent from '@/components/history/event/HistoryEvent';


const History = (): ReactNode => {
    return (
        <section id="history" className={styles.HistoryStyle}>
            <HistoryTimeline>
                {
                    props.eventProps.map((event, index) =>
                        <HistoryTimelineEntry key={index}>
                            <HistoryEvent {...{ props: event }}/>
                        </HistoryTimelineEntry>
                    )
                }
            </HistoryTimeline>
        </section>
    );
};

export default History;


const styles = tw({
    HistoryStyle: [
        'overflow-hidden',
        'bg-off-white'
    ]
});
