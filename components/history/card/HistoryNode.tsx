// use server

import React from 'react';
import { Props } from '@/utils/react/Props';
import { HistoryTypeEnum } from '@/utils/enums/HistoryEventEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import HistoryTimestamp from '@/components/history/card/HistoryTimestamp';
import HistoryCard from '@/components/history/card/HistoryCard';


export interface HistoryNodeProps {
    yearStart?: number;
    yearEnd?: number;
    type?: HistoryTypeEnum;
};

export interface HistoryNodeCompanyProps extends HistoryNodeProps {
    job?: HistoryNodeJobProps;
    company?: HistoryNodeLandmarkProps;
    techStack?: SkillEnum[];
};

export interface HistoryNodeSchoolProps extends HistoryNodeProps {
    school?: HistoryNodeLandmarkProps;
    diploma?: string;
};

export interface HistoryNodeJobProps {
    title?: string;
    description?: string[];
}

export interface HistoryNodeLandmarkProps {
    name?: string;
    location?: string;
}

const HistoryNode = ({ props = {}}: Props<HistoryNodeProps>): React.ReactNode => {
    return (
        <div className={HistoryNodeStyle}>
            <div className={HistoryNodeTimestampStyle}>
                <HistoryTimestamp props={props} />
            </div>
            <div className={HistoryNodeTypeStyle}>
                <HistoryCard props={props} />
            </div>
        </div>
    );
};

export default HistoryNode;


const HistoryNodeStyle = tw([
    'HistoryNodeStyle',
    'flex',
    'items-center'
]);

const HistoryNodeTimestampStyle = tw([
    'HistoryNodeTimestampStyle',
    'basis-1/4',
    'relative',
    'pointer-events-none',
    'select-none',
    'opacity-0',
    'transition-opacity',
    'group-[.HistoryTimelineEventStyle]/is-highlighted:opacity-100'
]); 

const HistoryNodeTypeStyle = tw([
    'HistoryNodeTypeStyle',
    'basis-3/4'
]); 
