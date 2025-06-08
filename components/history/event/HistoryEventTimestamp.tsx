// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { tw } from '@/utils/tailwind/TinyWind';
import { HistoryEventBirthdayProps, HistoryEventSchoolProps, HistoryEventCompanyProps } from '@/components/history/event/HistoryEvent';
import { HistoryEventTypeEnum } from '@/utils/enums/HistoryEventTypeEnum';
import { DateOnly } from '@/utils/global/DateOnly';


const HistoryEventTimestamp = ({ props = {}}: Props<HistoryEventBirthdayProps | HistoryEventSchoolProps | HistoryEventCompanyProps>): React.ReactNode => {

    const GetTimeSpan = (dateStart?: DateOnly, dateEnd?: DateOnly): string => {
        const now = new Date();
        let yearSpan = (dateEnd?.getFullYear() ?? now.getFullYear()) - (dateStart?.getFullYear() ?? 0);
        let monthSpan = (dateEnd?.getMonth() ?? now.getMonth()) - (dateStart?.getMonth() ?? 0);
        let daySpan = (dateEnd?.getDate() ?? now.getDate()) - (dateStart?.getDate() ?? 0);

        if (monthSpan < 0) {
            yearSpan--;
            monthSpan += 12;
        }

        if (daySpan > 0) {
            monthSpan++;
        }

        const timeSpanArray = [];

        if (yearSpan > 0) {
            timeSpanArray.push(`${yearSpan} year${yearSpan > 1 ? 's' : ''}`);
        }
        if (yearSpan > 0 && monthSpan > 0) {
            timeSpanArray.push('&');
        }
        if (monthSpan > 0) {
            timeSpanArray.push(`${monthSpan} month${monthSpan > 1 ? 's' : ''}`);
        }
        if (!dateEnd) {
            timeSpanArray.push('(Current)');
        }

        return timeSpanArray.join(' ');
    };

    let timeSpan: string | undefined;
    let title: string | undefined;
    let organizationName: string | undefined;
    let organizationInfo: string | undefined;

    switch (props.type) {
        case HistoryEventTypeEnum.Birthday:
            const propsBirthday = props as HistoryEventBirthdayProps;
            timeSpan = propsBirthday.date?.toLocaleDateString();
            break;

        case HistoryEventTypeEnum.School:
            const propsSchool = props as HistoryEventSchoolProps;

            const timeSpanSchool = GetTimeSpan(propsSchool.dateStart, propsSchool.dateEnd);

            title = 'Student';
            timeSpan = ` - ${timeSpanSchool}`;
            organizationName = propsSchool.school?.name;
            organizationInfo = `${propsSchool.school?.city}, ${propsSchool.school?.country}`;
            break;

        case HistoryEventTypeEnum.Company:
            const propsCompany = props as HistoryEventCompanyProps;
            
            const timeSpanCompany = GetTimeSpan(propsCompany.dateStart, propsCompany.dateEnd);

            title = propsCompany.job?.title;
            timeSpan = ` - ${timeSpanCompany}`;
            organizationName = propsCompany.company?.name;
            organizationInfo = `${propsCompany.company?.city}, ${propsCompany.company?.country}`;
            break;
    }

    return (
        <div className={styles.HistoryEventTimestampStyle}>
            <div className={styles.HistoryEventTimestampTitleDurationStyle}>
                {
                    title ?
                        <h4 className={styles.HistoryEventTimestampTitleStyle}>{title}</h4>
                    : <></>
                }
                {
                    (timeSpan && timeSpan != '') ?
                        <span className={styles.HistoryEventTimestampPeriodStyle}>{timeSpan}</span>
                    : <></>
                }
            </div>
            {
                (organizationName && organizationName != '') ?
                    <div className={styles.HistoryEventTimestampOrganizationNameStyle}>{organizationName}</div>
                : <></>
            }
            {
                organizationInfo ?
                    <div className={styles.HistoryEventTimestampOrganizationInfoStyle}>{organizationInfo}</div>
                : <></>
            }
        </div>
    );
};

export default HistoryEventTimestamp;


const styles = tw({
    HistoryEventTimestampStyle: [
        'card',
        'p-4',
        'bg-white',
        'text-center'
    ],

    HistoryEventTimestampTitleDurationStyle: [
        'mb-2'
    ],

    HistoryEventTimestampTitleStyle: [
        'inline-block',
        'text-xl',
        'font-medium'
    ],

    HistoryEventTimestampPeriodStyle: [
        'text-base',
        'text-gray-400'
    ],

    HistoryEventTimestampOrganizationNameStyle: [
        'text-base'
    ],

    HistoryEventTimestampOrganizationInfoStyle: [
        'text-sm'
    ]
});
