// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import HistoryCardCompanyCreation from '@/components/history/card/HistoryCardCompanyCreation';
import HistoryCardCompanyOnboarding from '@/components/history/card/HistoryCardCompanyOnboarding';
import HistoryCardCompanyPromotion from '@/components/history/card/HistoryCardCompanyPromotion';
import HistoryCardSchoolGraduation from '@/components/history/card/HistoryCardSchoolGraduation';
import HistoryCardSchoolEnrollment from '@/components/history/card/HistoryCardSchoolEnrollment';
import HistoryCardBirthday from '@/components/history/card/HistoryCardBirthday';
import { HistoryEventEnum } from '@/utils/enums/HistoryEventEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface HistoryCardProps {
    date?: Date;
    type?: HistoryEventEnum;
};

export interface HistoryCardCompanyProps extends HistoryCardProps {
    jobTitle?: string;
    jobDescription?: string[];
    companyName?: string;
    companyLocation?: string;
    techStack?: SkillEnum[];
};

export interface HistoryCardSchoolProps extends HistoryCardProps {
    schoolName?: string;
    schoolLocation?: string;
    diploma?: string;
};

const HistoryCard = ({ props = {}}: Props<HistoryCardProps>): React.ReactNode => {
    return (
        <div className={HistoryCardStyle}>
            <div className={HistoryCardDateStyle}>
                {props.date?.toLocaleDateString()}
            </div>
            <div className={HistoryCardTypeStyle}>
                {
                    props.type === HistoryEventEnum.CompanyCreation ?
                        <HistoryCardCompanyCreation {...{ props }} />
                    : props.type === HistoryEventEnum.CompanyOnboarding ?
                        <HistoryCardCompanyOnboarding {...{ props }} />
                    : props.type === HistoryEventEnum.CompanyPromotion ?
                        <HistoryCardCompanyPromotion {...{ props }} />
                    : props.type === HistoryEventEnum.SchoolEnrollment ?
                        <HistoryCardSchoolEnrollment {...{ props }} />
                    : props.type === HistoryEventEnum.SchoolGraduation ?
                        <HistoryCardSchoolGraduation {...{ props }} />
                    : props.type === HistoryEventEnum.Birthday ?
                        <HistoryCardBirthday {...{ props }} />
                    : <></>
                }
            </div>
        </div>
    );
};

export default HistoryCard;


const HistoryCardStyle = tw([
    'HistoryCardStyle',
    'relative',
    'card',
    'bg-white',
    'flex',
    'flex-row',
    'items-center',
    'py-4',
    'group-[.HistoryTimelineEventStyle]/left:text-left',
    'group-[.HistoryTimelineEventStyle]/left:flex-row',
    'group-[.HistoryTimelineEventStyle]/right:text-right',
    'group-[.HistoryTimelineEventStyle]/right:flex-row-reverse'
]);

const HistoryCardDateStyle = tw([
    'HistoryCardDateStyle',
    'basis-2/12',
    'text-2xl',
    'text-center',
    'text-orange-light-300',
    'font-bold'
]);

const HistoryCardTypeStyle = tw([
    'HistoryCardTypeStyle',
    'basis-10/12',
    'group-[.HistoryTimelineEventStyle]/left:pr-8',
    'group-[.HistoryTimelineEventStyle]/right:pl-8'
]);
