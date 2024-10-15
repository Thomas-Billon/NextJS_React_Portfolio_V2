// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { tw } from '@/utils/tailwind/TinyWind';
import { HistoryCardProps } from '@/components/history/card/HistoryCard';


const HistoryCardBirthday = ({ props = {}}: Props<HistoryCardProps>): React.ReactNode => {
    return (
        <div className={HistoryCardBirthdayStyle}>
            Hello world!
        </div>
    );
};

export default HistoryCardBirthday;


const HistoryCardBirthdayStyle = tw([
    'HistoryBirthdayStyle'
]);
