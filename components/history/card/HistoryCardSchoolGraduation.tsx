// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryCardSchoolProps } from '@/components/history/card/HistoryCard';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryCardSchoolGraduation = ({ props = {}}: Props<HistoryCardSchoolProps>): React.ReactNode => {
    return (
        <div className={HistoryCardSchoolGraduationStyle}>
            I graduated from {props.schoolName}
        </div>
    );
};

export default HistoryCardSchoolGraduation;


const HistoryCardSchoolGraduationStyle = tw([
    'HistoryCardSchoolGraduationStyle'
]);
