// use server

import React, { ReactNode } from 'react';
import { historyProps as props } from './HistoryProps';
import { tw } from '@/utils/tailwind/TinyWind';
import HistoryEvent from '@/components/history/HistoryEvent';


const History = (): ReactNode => {
    return (
        <section id="history" className={HistoryStyle}>
            <ul> {
                props.eventProps.map((event, index) =>
                    <HistoryEvent key={index} {...{ props: event }}/>
                )
            } </ul>
        </section>
    );
};

export default History;


const HistoryStyle = tw([
    'HistoryStyle',
    'bg-off-white'
]);
