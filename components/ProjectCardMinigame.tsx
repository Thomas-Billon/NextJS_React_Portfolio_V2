'use client';

import React, { useContext, useEffect, useState } from 'react';
import ProjectCardButton, { ProjectCardButtonProps } from '@/components/ProjectCardButton';
import TooltipBubble from '@/components/TooltipBubble';
import { TooltipContext } from '@/components/TooltipContainer';
import { Props } from '@/utils/React/Props';
import { projectProps } from '@/containers/Projects/ProjectsProps';


const ProjectCardMinigame = ({ props = {} }: Props<ProjectCardButtonProps>): React.ReactNode => {
    const [minigameStep, setMinigameStep] = useState<number>(-1);
    const tooltipContext = useContext(TooltipContext);

    const incrementMinigameStep = () => {
        setMinigameStep(minigameStep + 1);
        tooltipContext?.openTooltip();
    }

    return (
        <>
            <ProjectCardButton { ...{ props }} onClick={incrementMinigameStep} />
            <TooltipBubble content={projectProps.minigameProps[minigameStep]} />
        </>
    );
};

export default ProjectCardMinigame;