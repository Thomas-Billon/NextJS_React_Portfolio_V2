// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryCardCompanyProps } from '@/components/history/card/HistoryCard';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryCardCompanyOnboarding = ({ props = {}}: Props<HistoryCardCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryCardCompanyOnboardingStyle}>
            I started working as a {props.jobTitle} at {props.companyName}
        </div>
    );
};

export default HistoryCardCompanyOnboarding;


const HistoryCardCompanyOnboardingStyle = tw([
    'HistoryCardCompanyOnboardingStyle'
]);
