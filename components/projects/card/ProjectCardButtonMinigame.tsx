'use client';

import React, { createContext, useEffect, useState } from 'react';
import ProjectCardButton, { ProjectCardButtonProps } from '@/components/projects/card/ProjectCardButton';
import TooltipBubble from '@/components/shared/tooltip/TooltipBubble';
import { Props } from '@/utils/react/Props';
import { TooltipContext } from '@/components/shared/tooltip/TooltipContainer';
import { projectsProps } from '@/containers/projects/ProjectsProps';
import { MinigameActionEnum } from '@/utils/enums/MinigameActionEnum';
import { useCustomContext } from '@/hooks/UseCustomContext';


export interface ProjectCardButtonMinigameProps {
    text: string;
    actionAtStart?: MinigameActionEnum;
    actionAtEnd?: MinigameActionEnum;
}

export const MinigameContext = createContext({isMinigameOver: false});

const ProjectCardButtonMinigame = ({ props = {} }: Props<ProjectCardButtonProps>): React.ReactNode => {
    const [isMinigameOver, setIsMinigameOver] = useState<boolean>(false);
    const [minigameStep, setMinigameStep] = useState<number>(-1);
    const [isEnabled, setIsEnabled] = useState<boolean>(true);
    const [opacityValue, setOpacityValue] = useState<number>();
    const tooltipContext = useCustomContext(TooltipContext, 'TooltipContainer');

    const isClosed = tooltipContext.data.status == 'close' || tooltipContext.data.status== 'unmounted';

    useEffect(() => {
        if (isClosed) {
            handleMinigameAction(projectsProps.minigameProps[minigameStep]?.actionAtEnd);
        }
    }, [isClosed]);

    const incrementMinigameStep = (): void => {
        const newStep = minigameStep + 1;
        setMinigameStep(newStep);

        tooltipContext?.openTooltip();

        handleMinigameAction(projectsProps.minigameProps[newStep]?.actionAtStart);
    };

    const handleMinigameAction = (action?: MinigameActionEnum): void => {
        if (!action) {
            return;
        }

        switch (action) {
            case MinigameActionEnum.EnableButton:
                enableButton();
                break;

            case MinigameActionEnum.DisableButton:
                disableButton();
                break;

            case MinigameActionEnum.AddOpacity:
                removeOpacity();
                break;

            case MinigameActionEnum.RemoveOpacity:
                removeOpacity();
                break;
        }
    };

    const enableButton = (): void => {
        setIsEnabled(true);
    }

    const disableButton = (): void => {
        setIsEnabled(false);
    }

    const addOpacity = (): void => {
        setOpacityValue(1);
    }

    const removeOpacity = (): void => {
        setOpacityValue(0);
    }

    return (
        <MinigameContext.Provider value={{isMinigameOver: false}}>
            <ProjectCardButton { ...{ props }} onClick={incrementMinigameStep} isEnabled={isEnabled} opacity={opacityValue} />
            <TooltipBubble content={projectsProps.minigameProps[minigameStep]?.text ?? ''} />
        </MinigameContext.Provider>
    );
};

export default ProjectCardButtonMinigame;