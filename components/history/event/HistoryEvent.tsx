// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { tw } from '@/utils/tailwind/TinyWind';
import HistoryEventTimestamp from '@/components/history/event/HistoryEventTimestamp';
import HistoryExperience from '@/components/history/event/HistoryEventExperience';
import { DateOnly } from '@/utils/global/DateOnly';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { HistoryEventTypeEnum as HistoryEventTypeEnum } from '@/utils/enums/HistoryEventTypeEnum';


export interface HistoryEventProps {
    type?: HistoryEventTypeEnum;
}

export interface HistoryEventBirthdayProps extends HistoryEventProps {
    date?: DateOnly;
};

export interface HistoryEventSchoolProps extends HistoryEventProps, HistoryEventPeriodProps {
    education?: HistoryEventEducationProps;
    school?: HistoryEventOrganizationProps;
};

export interface HistoryEventCompanyProps extends HistoryEventProps, HistoryEventPeriodProps {
    job?: HistoryEventJobProps;
    company?: HistoryEventOrganizationProps;
};

export interface HistoryEventPeriodProps {
    dateStart?: DateOnly;
    dateEnd?: DateOnly;
}

export interface HistoryEventOrganizationProps {
    name?: string;
    city?: string;
    country?: string;
    website?: string;
}

export interface HistoryEventEducationProps {
    degree?: string;
    fieldOfStudy?: string;
    description?: string;
    subjects?: string[];
}

export interface HistoryEventJobProps {
    title?: string;
    description?: string[];
    techStack?: SkillEnum[];
}

const HistoryEvent = ({ props = {}}: Props<HistoryEventBirthdayProps | HistoryEventSchoolProps | HistoryEventCompanyProps>): React.ReactNode => {
    return (
        <div className={styles.HistoryEventStyle}>
            <div className={styles.HistoryEventTimestampContainerStyle}>
                <HistoryEventTimestamp props={props} />
            </div>
            <div className={styles.HistoryEventExperienceContainerStyle}>
                <HistoryExperience props={props} />
            </div>
        </div>
    );
};

export default HistoryEvent;


const styles = tw({
    HistoryEventStyle: [
        'flex',
        'items-center',
        'justify-center'
    ],

    HistoryEventTimestampContainerStyle: [
        'basis-1/2',
        'pointer-events-none',
        'select-none',
        'opacity-0',
        'transition-opacity',
        'group-[.HistoryTimelineEntryStyle]/is-highlighted:pointer-events-auto',
        'group-[.HistoryTimelineEntryStyle]/is-highlighted:select-auto',
        'group-[.HistoryTimelineEntryStyle]/is-highlighted:opacity-100'
    ],

    HistoryEventExperienceContainerStyle: [
    ]
});
