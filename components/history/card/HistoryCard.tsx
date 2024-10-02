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
            <span>{props.date?.toLocaleDateString()}</span>
            <span> {
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
            } </span>
        </div>
    );
};

export default HistoryCard;


const HistoryCardStyle = tw([
    'HistoryCardStyle'
]);
