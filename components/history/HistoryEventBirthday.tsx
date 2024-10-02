// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { tw } from '@/utils/tailwind/TinyWind';
import { HistoryEventProps } from '@/components/history/HistoryEvent';


const HistoryEventBirthday = ({ props = {}}: Props<HistoryEventProps>): React.ReactNode => {
    return (
        <div className={HistoryEventBirthdayStyle}>
            Hello world!
        </div>
    );
};

export default HistoryEventBirthday;


const HistoryEventBirthdayStyle = tw([
    'HistoryEventBirthdayStyle'
]);
