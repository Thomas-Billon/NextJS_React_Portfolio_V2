// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryTypeEnum } from '@/utils/enums/HistoryEventEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { HistoryNodeCompanyProps } from '@/components/history/card/HistoryNode';
import SkillFlag from '@/components/shared/SkillFlag';


export interface HistoryCardProps {
    date?: Date;
    type?: HistoryTypeEnum;
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
            {
                props.type === HistoryTypeEnum.CompanyCreation ||
                props.type === HistoryTypeEnum.CompanyOnboarding ||
                props.type === HistoryTypeEnum.CompanyPromotion ?
                    <ul className={HistoryCardJobDescriptionListStyle}>
                        {
                            (props as HistoryNodeCompanyProps).job?.description?.map((paragraph, index) => 
                                <li key={index} className={HistoryCardJobDescriptionItemStyle}>{paragraph}</li>
                            )
                        }
                    </ul>
                : <></>
            }
            {
                props.type === HistoryTypeEnum.CompanyCreation ||
                props.type === HistoryTypeEnum.CompanyOnboarding ||
                props.type === HistoryTypeEnum.CompanyPromotion ?
                    <div className={HistoryCardJobTechStackStyle}>
                        {
                            (props as HistoryNodeCompanyProps).techStack?.map((tech, index) => 
                                <SkillFlag key={index} props={{ skill: tech }}/>
                            )
                        }
                    </div>
                : <></>
            }
            {
                props.type === HistoryTypeEnum.Birthday ?
                    <p className={HistoryCardBirthdayStyle}>
                        Hello world!
                    </p>
                : <></>
            }
        </div>
    );
};

export default HistoryCard;


const HistoryCardStyle = tw([
    'HistoryCardStyle',
    'card',
    'p-4',
    'ml-4',
    'bg-white'
]);

const HistoryCardJobDescriptionListStyle = tw([
    'HistoryCardJobDescriptionListStyle',
    'list-disc',
    'pl-4',
    'mb-4',
    'text-sm'
]);

const HistoryCardJobDescriptionItemStyle = tw([
    'HistoryCardJobDescriptionItemStyle'
]);

const HistoryCardJobTechStackStyle = tw([
    'HistoryCardJobTechStackStyle',
    'spaced'
]);

const HistoryCardBirthdayStyle = tw([
    'HistoryCardBirthdayStyle',
    'text-base'
]);
