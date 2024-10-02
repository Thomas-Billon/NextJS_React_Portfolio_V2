// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryEventCompanyProps } from '@/components/history/HistoryEvent';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryEventCompanyCreation = ({ props = {}}: Props<HistoryEventCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryEventCompanyCreationStyle}>
            I started my own company called {props.companyName}
        </div>
    );
};

export default HistoryEventCompanyCreation;


const HistoryEventCompanyCreationStyle = tw([
    'HistoryEventCompanyCreationStyle'
]);
