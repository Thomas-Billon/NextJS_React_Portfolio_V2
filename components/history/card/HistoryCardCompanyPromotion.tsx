// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryCardCompanyProps } from '@/components/history/card/HistoryCard';
import { tw } from '@/utils/tailwind/TinyWind';


const HistoryCardCompanyPromotion = ({ props = {}}: Props<HistoryCardCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryCardCompanyPromotionStyle}>
            I transitioned to a {props.jobTitle} at {props.companyName}
        </div>
    );
};

export default HistoryCardCompanyPromotion;


const HistoryCardCompanyPromotionStyle = tw([
    'HistoryCardCompanyPromotionStyle'
]);
