'use client';

import React, { createContext, useEffect, useState } from 'react';
import ProjectCardButton, { ProjectCardButtonProps } from '@/components/Project/Card/ProjectCardButton';
import TooltipBubble from '@/components/Shared/Tooltip/TooltipBubble';
import { Props } from '@/utils/React/Props';
import { TooltipContext } from '@/components/Shared/Tooltip/TooltipContainer';
import { projectProps } from '@/containers/Projects/ProjectsProps';
import { MinigameEnum } from '@/utils/MinigameEnum';
import { useCustomContext } from '@/hooks/UseCustomContext';


export interface ProjectCardButtonMinigameProps {
    text: string;
    actionAtStart?: MinigameEnum;
    actionAtEnd?: MinigameEnum;
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
            handleMinigameAction(projectProps.minigameProps[minigameStep]?.actionAtEnd);
        }
    }, [isClosed]);

    const incrementMinigameStep = (): void => {
        const newStep = minigameStep + 1;
        setMinigameStep(newStep);

        tooltipContext?.openTooltip();

        handleMinigameAction(projectProps.minigameProps[newStep]?.actionAtStart);
    };

    const handleMinigameAction = (action?: MinigameEnum): void => {
        if (!action) {
            return;
        }

        switch (action) {
            case MinigameEnum.EnableButton:
                enableButton();
                break;

            case MinigameEnum.DisableButton:
                disableButton();
                break;

            case MinigameEnum.AddOpacity:
                removeOpacity();
                break;

            case MinigameEnum.RemoveOpacity:
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
            <TooltipBubble content={projectProps.minigameProps[minigameStep]?.text ?? ''} />
        </MinigameContext.Provider>
    );
};

export default ProjectCardButtonMinigame;