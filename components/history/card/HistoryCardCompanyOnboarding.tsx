// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryCardCompanyProps } from '@/components/history/card/HistoryCard';
import { tw } from '@/utils/tailwind/TinyWind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';


const HistoryCardCompanyOnboarding = ({ props = {}}: Props<HistoryCardCompanyProps>): React.ReactNode => {
    return (
        <div className={HistoryCardCompanyOnboardingStyle}>
            <div className={HistoryCardCompanyOnboardingTitleSubtitleStyle}>
                <h4 className={HistoryCardCompanyOnboardingTitleStyle}>New job</h4>
                <span className={HistoryCardCompanyOnboardingSubtitleStyle}> - I started working as a {props.jobTitle} at {props.companyName}</span>
            </div>
            <div>
                <FontAwesomeIcon icon={fas.faSuitcase} size="lg" fixedWidth />
                <span>{props.jobTitle}</span>
            </div>
            <div>
                <FontAwesomeIcon icon={fas.faBuilding} size="lg" fixedWidth />
                <span>{props.companyName}</span>
            </div>
            <div>
                <FontAwesomeIcon icon={fas.faLocationDot} size="lg" fixedWidth />
                <span>{props.companyLocation}</span>
            </div>
            <ul className={HistoryCardCompanyOnboardingDescriptionListStyle}>
                {
                    props.jobDescription?.map((paragraph, index) => 
                        <li key={index} className={HistoryCardCompanyOnboardingDescriptionItemStyle}>{paragraph}</li>
                    )
                }
            </ul>
            <div className={HistoryCardCompanyOnboardingTechListStyle}>
                {
                    props.techStack?.map((tech, index) => 
                        <span key={index} className={HistoryCardCompanyOnboardingTechItemStyle}>{tech}</span>
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

const HistoryCardCompanyOnboardingTechListStyle = tw([
    'HistoryCardCompanyOnboardingTechListStyle'
]);

const HistoryCardCompanyOnboardingTechItemStyle = tw([
    'HistoryCardCompanyOnboardingTechItemStyle',
    'inline-block',
    'px-2',
    'py-0.5',
    'bg-orange-light-100',
    'text-orange-light-600',
    'text-xs',
    'font-medium',
    'border',
    'border-orange-light-400',
    'rounded',
    'spaced'
]);
