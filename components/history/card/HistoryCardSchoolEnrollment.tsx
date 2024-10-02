// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryCardSchoolProps } from '@/components/history/card/HistoryCard';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryCardSchoolEnrollment = ({ props = {}}: Props<HistoryCardSchoolProps>): React.ReactNode => {
    return (
        <div className={HistoryCardSchoolEnrollmentStyle}>
            I enrolled at {props.schoolName}
        </div>
    );
};

export default HistoryCardSchoolEnrollment;


const HistoryCardSchoolEnrollmentStyle = tw([
    'HistoryCardSchoolEnrollmentStyle'
]);
