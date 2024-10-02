// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import HistoryEventCompanyCreation from '@/components/history/HistoryEventCompanyCreation';
import HistoryEventCompanyOnboarding from '@/components/history/HistoryEventCompanyOnboarding';
import HistoryEventCompanyPromotion from '@/components/history/HistoryEventCompanyPromotion';
import HistoryEventSchoolGraduation from '@/components/history/HistoryEventSchoolGraduation';
import HistoryEventSchoolEnrollment from '@/components/history/HistoryEventSchoolEnrollment';
import HistoryEventBirthday from '@/components/history/HistoryEventBirthday';
import { HistoryEventEnum } from '@/utils/enums/HistoryEventEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface HistoryEventProps {
    date?: Date;
    type?: HistoryEventEnum;
};

export interface HistoryEventCompanyProps extends HistoryEventProps {
    jobTitle?: string;
    jobDescription?: string[];
    companyName?: string;
    companyLocation?: string;
    techStack?: SkillEnum[];
};

export interface HistoryEventSchoolProps extends HistoryEventProps {
    schoolName?: string;
    schoolLocation?: string;
    diploma?: string;
};

const HistoryEvent = ({ props = {}}: Props<HistoryEventProps>): React.ReactNode => {
    return (
        <li className={HistoryEventStyle}>
            <span>{props.date?.toLocaleDateString()}</span>
            <span> {
                props.type === HistoryEventEnum.CompanyCreation ?
                    <HistoryEventCompanyCreation {...{ props }} />
                : props.type === HistoryEventEnum.CompanyOnboarding ?
                    <HistoryEventCompanyOnboarding {...{ props }} />
                : props.type === HistoryEventEnum.CompanyPromotion ?
                    <HistoryEventCompanyPromotion {...{ props }} />
                : props.type === HistoryEventEnum.SchoolEnrollment ?
                    <HistoryEventSchoolEnrollment {...{ props }} />
                : props.type === HistoryEventEnum.SchoolGraduation ?
                    <HistoryEventSchoolGraduation {...{ props }} />
                : props.type === HistoryEventEnum.Birthday ?
                    <HistoryEventBirthday {...{ props }} />
                : <></>
            } </span>
        </li>
    );
};

export default HistoryEvent;


const HistoryEventStyle = tw([
    'HistoryEventStyle'
]);
