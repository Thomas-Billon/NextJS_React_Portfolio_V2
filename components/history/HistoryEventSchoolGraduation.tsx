// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryEventSchoolProps } from '@/components/history/HistoryEvent';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryEventSchoolGraduation = ({ props = {}}: Props<HistoryEventSchoolProps>): React.ReactNode => {
    return (
        <div className={HistoryEventSchoolGraduationStyle}>
            I graduated from {props.schoolName}
        </div>
    );
};

export default HistoryEventSchoolGraduation;


const HistoryEventSchoolGraduationStyle = tw([
    'HistoryEventSchoolGraduationStyle'
]);
