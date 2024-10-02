// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryEventCompanyProps } from '@/components/history/HistoryEvent';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryEventCompanyPromotion = ({ props = {}}: Props<HistoryEventCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryEventCompanyPromotionStyle}>
            I transitioned to a {props.jobTitle} at {props.companyName}
        </div>
    );
};

export default HistoryEventCompanyPromotion;


const HistoryEventCompanyPromotionStyle = tw([
    'HistoryEventCompanyPromotionStyle'
]);
