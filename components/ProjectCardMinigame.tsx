'use client';

import React, { useState } from 'react';
import ProjectCardButton, { ProjectCardButtonProps } from '@/components/ProjectCardButton';
import TooltipContainer from '@/components/TooltipContainer';
import TooltipBubble from '@/components/TooltipBubble';
import { Props } from '@/utils/React/Props';


const ProjectCardMinigame = ({ props = {} }: Props<ProjectCardButtonProps>): React.ReactNode => {
    const [minigameStep, setMinigameStep] = useState<number>(0);

    const updateMinigameText = () => {
        setMinigameStep(minigameStep + 1);
    }

    return (
        <TooltipContainer>
            <ProjectCardButton { ...{ props }} onClick={updateMinigameText} />
            <TooltipBubble>
                {minigameStep}
            </TooltipBubble>
        </TooltipContainer>
    );
};

export default ProjectCardMinigame;