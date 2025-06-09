// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { tw } from '@/utils/tailwind/TinyWind';
import { HistoryEventBirthdayProps, HistoryEventSchoolProps, HistoryEventCompanyProps, HistoryEventPeriodProps, HistoryEventOrganizationProps } from '@/components/history/event/HistoryEvent';
import { HistoryEventTypeEnum } from '@/utils/enums/HistoryEventTypeEnum';
import { DateOnly } from '@/utils/global/DateOnly';
import HistoryTimelineEntryBackground from '@/components/history/timeline/HistoryTimelineEntryBackground';


const HistoryEventTimestamp = ({ props = {}}: Props<HistoryEventBirthdayProps | HistoryEventSchoolProps | HistoryEventCompanyProps>): React.ReactNode => {

    const GetPeriodString = (dateStart?: DateOnly, dateEnd?: DateOnly): string => {
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

    return (
        <div className={styles.HistoryEventTimestampStyle}>
            <HistoryTimelineEntryBackground />
            <div className={styles.HistoryEventTimestampContainerStyle}>
                <div className={styles.HistoryEventTimestampTitlePeriodStyle}>
                    <h4 className={styles.HistoryEventTimestampTitleStyle}>
                        {
                            props.type === HistoryEventTypeEnum.Birthday ?
                                'Hello world!'
                            : props.type === HistoryEventTypeEnum.School ?
                                'Student'
                            : props.type === HistoryEventTypeEnum.Company ?
                                (props as HistoryEventCompanyProps).job?.title
                            : <></>
                        }
                    </h4>
                    <span className={styles.HistoryEventTimestampPeriodStyle}>
                        {
                            ' - ' + (
                                props.type === HistoryEventTypeEnum.Birthday ?
                                    (props as HistoryEventBirthdayProps).date?.toLocaleDateString()
                                : props.type === HistoryEventTypeEnum.School || props.type === HistoryEventTypeEnum.Company ?
                                    GetPeriodString((props as HistoryEventPeriodProps).dateStart, (props as HistoryEventPeriodProps).dateEnd)
                                : ''
                            )
                        }
                    </span>
                </div>
                {
                    props.type === HistoryEventTypeEnum.School || props.type === HistoryEventTypeEnum.Company ?
                        (() => {
                            let organization: HistoryEventOrganizationProps | undefined;
                            
                            if (props.type === HistoryEventTypeEnum.School) {
                                organization = (props as HistoryEventSchoolProps).school;
                            }
                            else if (props.type === HistoryEventTypeEnum.Company) {
                                organization = (props as HistoryEventCompanyProps).company;
                            }

                            return organization ?
                                <>
                                    <div className={styles.HistoryEventTimestampOrganizationNameStyle}>
                                        <a className={styles.HistoryEventTimestampOrganizationLinkStyle} href={organization.website}>
                                            {organization.name}
                                        </a>
                                    </div>
                                    <div className={styles.HistoryEventTimestampOrganizationLocationStyle}>
                                        {`${organization.city}, ${organization.country}`}
                                    </div>
                                </>
                            : <></>;
                        })()
                    : <></>
                }
            </div>
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

    HistoryEventTimestampContainerStyle: [
        'relative',
        'z-2',
        'full'
    ],

    HistoryEventTimestampTitlePeriodStyle: [
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

    HistoryEventTimestampOrganizationLinkStyle: [
    ],

    HistoryEventTimestampOrganizationLocationStyle: [
        'text-sm'
    ]
});
