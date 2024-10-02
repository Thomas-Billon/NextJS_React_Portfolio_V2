// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryEventCompanyProps } from '@/components/history/HistoryEvent';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryEventCompanyOnboarding = ({ props = {}}: Props<HistoryEventCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryEventCompanyOnboardingStyle}>
            I started working as a {props.jobTitle} at {props.companyName}
        </div>
    );
};

export default HistoryEventCompanyOnboarding;


const HistoryEventCompanyOnboardingStyle = tw([
    'HistoryEventCompanyOnboardingStyle'
]);
