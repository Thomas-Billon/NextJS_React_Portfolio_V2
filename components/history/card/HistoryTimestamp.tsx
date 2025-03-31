// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryTypeEnum } from '@/utils/enums/HistoryEventEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { HistoryNodeCompanyProps, HistoryNodeProps, HistoryNodeSchoolProps } from '@/components/history/card/HistoryNode';


const HistoryTimestamp = ({ props = {}}: Props<HistoryNodeProps>): React.ReactNode => {
    return (
        <div className={HistoryTimestampStyle}>
            <div className={HistoryTimestampContainerStyle}>
                <div className={HistoryTimestampYearStyle}>
                    {props.yearStart}
                    {
                        props.type === HistoryTypeEnum.CompanyCreation ||
                        props.type === HistoryTypeEnum.CompanyOnboarding ||
                        props.type === HistoryTypeEnum.CompanyPromotion ||
                        props.type === HistoryTypeEnum.SchoolEnrollment ||
                        props.type === HistoryTypeEnum.SchoolGraduation ?
                            props.yearEnd !== undefined ?
                                <> - {props.yearEnd}</>
                            :<> - Today</>
                        :<></>
                    }
                </div>
                {
                    props.type === HistoryTypeEnum.CompanyCreation ||
                    props.type === HistoryTypeEnum.CompanyOnboarding ||
                    props.type === HistoryTypeEnum.CompanyPromotion ?
                        <h4 className={HistoryTimestampTitleStyle}>{(props as HistoryNodeCompanyProps).job?.title}</h4>
                    : <></>
                }
                {
                    props.type === HistoryTypeEnum.CompanyCreation ||
                    props.type === HistoryTypeEnum.CompanyOnboarding ||
                    props.type === HistoryTypeEnum.CompanyPromotion ?
                        <div className={HistoryTimestampNameStyle}>{(props as HistoryNodeCompanyProps).company?.name}</div>
                    : props.type === HistoryTypeEnum.SchoolEnrollment ||
                    props.type === HistoryTypeEnum.SchoolGraduation ?
                        <div className={HistoryTimestampNameStyle}>{(props as HistoryNodeSchoolProps).school?.name}</div>
                    : <></>
                }
            </div>
        </div>
    );
};

export default HistoryTimestamp;


const HistoryTimestampStyle = tw([
    'HistoryTimestampStyle',
    '!fixed',
    'center',
    'container',
    'flex'
]);

const HistoryTimestampContainerStyle = tw([
    'HistoryTimestampContainerStyle',
    'basis-1/4',
    'pr-4'
]);

const HistoryTimestampYearStyle = tw([
    'HistoryTimestampYearStyle',
    'text-base',
    'text-gray-400'
]);

const HistoryTimestampTitleStyle = tw([
    'HistoryTimestampTitleStyle',
    'text-xl',
    'font-medium',
    'mt-2'
]);

const HistoryTimestampNameStyle = tw([
    'HistoryTimestampNameStyle',
    'text-sm'
]);
