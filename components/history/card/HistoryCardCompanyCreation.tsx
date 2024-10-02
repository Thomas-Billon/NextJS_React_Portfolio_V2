// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryCardCompanyProps } from '@/components/history/card/HistoryCard';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryCardCompanyCreation = ({ props = {}}: Props<HistoryCardCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryCardCompanyCreationStyle}>
            I started my own company called {props.companyName}
        </div>
    );
};

export default HistoryCardCompanyCreation;


const HistoryCardCompanyCreationStyle = tw([
    'HistoryCardCompanyCreationStyle'
]);
