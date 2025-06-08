// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { tw } from '@/utils/tailwind/TinyWind';
import { HistoryEventBirthdayProps, HistoryEventSchoolProps, HistoryEventCompanyProps } from '@/components/history/event/HistoryEvent';
import SkillFlag from '@/components/shared/SkillFlag';
import { HistoryEventTypeEnum } from '@/utils/enums/HistoryEventTypeEnum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


const HistoryEventExperience = ({ props = {}}: Props<HistoryEventBirthdayProps | HistoryEventSchoolProps | HistoryEventCompanyProps>): React.ReactNode => {
    return (
        <div className={styles.HistoryEventExperienceStyle}>
            {
                props.type === HistoryEventTypeEnum.Birthday ?
                    <p className={styles.HistoryEventExperienceTitleStyle}>
                        Hello world!
                    </p>
                : <></>
            }
            {
                props.type === HistoryEventTypeEnum.School ?
                    <>
                        <p className={styles.HistoryEventExperienceTitleStyle}>
                            {`${(props as HistoryEventSchoolProps).education?.degree} in ${(props as HistoryEventSchoolProps).education?.fieldOfStudy}`}
                        </p>
                        <p className={styles.HistoryEventExperienceDescriptionTextStyle}>
                            {(props as HistoryEventSchoolProps).education?.description}
                        </p>
                    </>
                : <></>
            }
            {
                props.type === HistoryEventTypeEnum.Company ?
                    <>
                        <ul className={styles.HistoryEventExperienceDescriptionListStyle}>
                            {
                                (props as HistoryEventCompanyProps).job?.description?.map((paragraph, index) => 
                                    <li key={index} className={styles.HistoryEventExperienceDescriptionItemStyle}>{paragraph}</li>
                                )
                            }
                        </ul>
                        <div className={styles.HistoryEventExperienceJobTechStackStyle}>
                            {
                                (props as HistoryEventCompanyProps).job?.techStack?.map((tech, index) => 
                                    <SkillFlag key={index} props={{ skill: tech }}/>
                                )
                            }
                        </div>
                    </>
                : <></>
            }
            <FontAwesomeIcon
                icon={
                    props.type === HistoryEventTypeEnum.Birthday ? fas.faBirthdayCake
                    : props.type === HistoryEventTypeEnum.School ? fas.faGraduationCap
                    : props.type === HistoryEventTypeEnum.Company ? fas.faBriefcase
                    : fas.faQuestion
                }
                className={styles.HistoryEventExperienceIconStyle}
                size="6x"
                fixedWidth
            />
        </div>
    );
};

export default HistoryEventExperience;


const styles = tw({
    HistoryEventExperienceStyle: [
        'hidden',
        'card',
        'p-4',
        'ml-4',
        'bg-white'
    ],

    HistoryEventExperienceTitleStyle: [
        'text-base'
    ],

    HistoryEventExperienceDescriptionTextStyle: [
        'text-sm'
    ],

    HistoryEventExperienceDescriptionListStyle: [
        'list-disc',
        'pl-4',
        'mb-4',
        'text-sm'
    ],

    HistoryEventExperienceDescriptionItemStyle: [
    ],

    HistoryEventExperienceJobTechStackStyle: [
        'spaced'
    ],

    HistoryEventExperienceIconStyle: [
        'absolute',
        'right-0',
        'bottom-0',
        'rotate-[-15deg]',
        'text-gray-200'
    ]
});
