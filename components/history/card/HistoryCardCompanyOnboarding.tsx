// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryCardCompanyProps } from '@/components/history/card/HistoryCard';
import { tw } from '@/utils/tailwind/TinyWind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import SkillFlag from '@/components/shared/SkillFlag';


const HistoryCardCompanyOnboarding = ({ props = {}}: Props<HistoryCardCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryCardCompanyOnboardingStyle}>
            <div className={HistoryCardCompanyOnboardingTitleSubtitleStyle}>
                <h4 className={HistoryCardCompanyOnboardingTitleStyle}>New job</h4>
                <span className={HistoryCardCompanyOnboardingSubtitleStyle}> - I started working as a {props.jobTitle} at {props.companyName}</span>
            </div>
            <div className={HistoryCardCompanyOnboardingDetailGroupStyle}>
                <div className={HistoryCardCompanyOnboardingDetailStyle}>
                    <FontAwesomeIcon icon={fas.faSuitcase} className={HistoryCardCompanyOnboardingIconStyle} size="lg" fixedWidth />
                    <span>{props.jobTitle}</span>
                </div>
                <div className={HistoryCardCompanyOnboardingDetailStyle}>
                    <FontAwesomeIcon icon={fas.faBuilding} className={HistoryCardCompanyOnboardingIconStyle} size="lg" fixedWidth />
                    <span>{props.companyName}</span>
                </div>
                <div className={HistoryCardCompanyOnboardingDetailStyle}>
                    <FontAwesomeIcon icon={fas.faLocationDot} className={HistoryCardCompanyOnboardingIconStyle} size="lg" fixedWidth />
                    <span>{props.companyLocation}</span>
                </div>
            </div>
            <ul className={HistoryCardCompanyOnboardingDescriptionListStyle}>
                {
                    props.jobDescription?.map((paragraph, index) => 
                        <li key={index} className={HistoryCardCompanyOnboardingDescriptionItemStyle}>{paragraph}</li>
                    )
                }
            </ul>
            <div className={HistoryCardCompanyOnboardingTechStyle}>
                {
                    props.techStack?.map((tech, index) => 
                        <SkillFlag key={index} props={{ skill: tech }}/>
                    )
                }
            </div>
        </div>
    );
};

export default HistoryCardCompanyOnboarding;


const HistoryCardCompanyOnboardingStyle = tw([
    'HistoryCardCompanyOnboardingStyle',
    'flex',
    'flex-col'
]);

const HistoryCardCompanyOnboardingTitleSubtitleStyle = tw([
    'HistoryCardCompanyOnboardingTitleSubtitleStyle',
    'mb-4'
]);

const HistoryCardCompanyOnboardingTitleStyle = tw([
    'HistoryCardCompanyOnboardingTitleStyle',
    'text-xl',
    'font-medium',
    'inline-block'
]);

const HistoryCardCompanyOnboardingSubtitleStyle = tw([
    'HistoryCardCompanyOnboardingSubtitleStyle',
    'text-base'
]);

const HistoryCardCompanyOnboardingDetailGroupStyle = tw([
    'HistoryCardCompanyOnboardingDetailGroupStyle',
    'mb-4'
]);

const HistoryCardCompanyOnboardingDetailStyle = tw([
    'HistoryCardCompanyOnboardingDetailStyle',
    'flex',
    'group-[.HistoryTimelineEventStyle]/left:flex-row',
    'group-[.HistoryTimelineEventStyle]/right:flex-row-reverse'
]);

const HistoryCardCompanyOnboardingIconStyle = tw([
    'HistoryCardCompanyOnboardingIconStyle',
    'text-gray-800',
    'group-[.HistoryTimelineEventStyle]/left:mr-2',
    'group-[.HistoryTimelineEventStyle]/right:ml-2'
]);

const HistoryCardCompanyOnboardingDescriptionListStyle = tw([
    'HistoryCardCompanyOnboardingDescriptionListStyle',
    'list-disc',
    'mb-4',
    'group-[.HistoryTimelineEventStyle]/left:pl-6',
    'group-[.HistoryTimelineEventStyle]/right:pr-6',
    'group-[.HistoryTimelineEventStyle]/right:rtl'
]);

const HistoryCardCompanyOnboardingDescriptionItemStyle = tw([
    'HistoryCardCompanyOnboardingDescriptionItemStyle',
    'text-sm'
]);

const HistoryCardCompanyOnboardingTechStyle = tw([
    'HistoryCardCompanyOnboardingTechStyle',
    'spaced',
    'group-[.HistoryTimelineEventStyle]/right:flex-row-reverse'
]);
