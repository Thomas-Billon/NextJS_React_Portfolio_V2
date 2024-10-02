'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TooltipContext } from '@/components/shared/tooltip/TooltipContainer';
import { MinigameContext } from '@/components/projects/card/ProjectCardButtonMinigame';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props, ClickableProps, EnabledProps } from '@/utils/react/Props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fab from '@fortawesome/free-brands-svg-icons';


export interface ProjectCardButtonProps {
    href?: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    isMinigame?: boolean;
}

interface ProjectCardButtonExtendedProps extends ProjectCardButtonProps {
    opacity?: number
}

const ProjectCardButton = ({ props = {}, onClick = () => {}, isEnabled = true, opacity }: Props<ProjectCardButtonProps> & ProjectCardButtonExtendedProps & ClickableProps & EnabledProps): React.ReactNode => {
    const tooltipContext = props.isMinigame ? useCustomContext(TooltipContext) : null;
    const minigameContext = props.isMinigame ? useCustomContext(MinigameContext) : null;

    const isLinkExternalUrl: boolean = props.href?.indexOf('https') != -1;
    const isLinkGithub: boolean = props.href?.indexOf('https://github.com/') != -1;
    const isLinkImage: boolean = props.src && props.alt ? true : false;

    const click = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
    };

    const clickEmptyLink = (): void => {
        if (isEnabled) {
            onClick();
        }
    };

    const isLinkDisplayed = (props.isMinigame && minigameContext?.isMinigameOver) || !props.isMinigame;

    return (
        <span className={ProjectCardButtonContainerStyle} onClick={clickEmptyLink} {...(opacity != undefined ? { 'style': { opacity: opacity }} : {})}>
            <Link 
                className={ProjectCardButtonStyle({ isLinkImage, isLinkGithub, isEnabled })}
                href={isLinkDisplayed ? props.href ?? '' : ''}
                scroll={isLinkDisplayed}
                passHref={isLinkExternalUrl}
                {...(isLinkExternalUrl ? { 'target': '_blank' } : {})}
                {...(isLinkGithub ? { 'title': 'See source code' } : {})}
                onClick={click}
                ref={tooltipContext?.data.refs.setReference}
                {...tooltipContext?.getReferenceProps()}
            > {
                isLinkImage ?
                    <Image className={ProjectCardButtonImageStyle} src={props.src ?? ''} alt={props.alt ?? ''} width={props.width ?? 120} height={props.height ?? 40} />
                : isLinkGithub ?
                    <FontAwesomeIcon icon={fab.faGithub} size="lg" fixedWidth />
                :
                    <span>See more</span>
            } </Link>
        </span>
    );
};

export default ProjectCardButton;


const ProjectCardButtonContainerStyle = tw([
    'ProjectCardButtonContainerStyle',
    'inline-flex',
    'spaced',
    'transition-opacity'
]);

const ProjectCardButtonStyle = ({ isLinkImage, isLinkGithub, isEnabled }: { isLinkImage: boolean, isLinkGithub: boolean, isEnabled: boolean }) => tw([
    'ProjectCardButtonStyle',
    'inline-block',
    'select-none',
    isLinkGithub && 'p-2',
    !isLinkImage && 'text-sm',
    !isLinkImage && 'text-white',
    !isLinkImage && 'bg-orange-light-400',
    !isLinkImage && 'rounded',
    !isLinkImage && 'transition-colors',
    !isLinkImage && 'hover:bg-orange-light-500',
    !isLinkImage && 'active:bg-orange-light-500',
    !isLinkImage && !isLinkGithub && 'px-4',
    !isLinkImage && !isLinkGithub && 'py-2',
    !isLinkImage && !isLinkGithub && 'font-medium',
    !isEnabled && 'pointer-events-none'
]);

const ProjectCardButtonImageStyle = tw([
    'ProjectCardButtonImageStyle',
    'w-auto',
    'h-10'
]);
