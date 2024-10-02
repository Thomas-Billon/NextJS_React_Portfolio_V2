// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryEventSchoolProps } from '@/components/history/HistoryEvent';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryEventSchoolEnrollment = ({ props = {}}: Props<HistoryEventSchoolProps>): React.ReactNode => {
    return (
        <div className={HistoryEventSchoolEnrollmentStyle}>
            I enrolled at {props.schoolName}
        </div>
    );
};

export default HistoryEventSchoolEnrollment;


const HistoryEventSchoolEnrollmentStyle = tw([
    'HistoryEventSchoolEnrollmentStyle'
]);
