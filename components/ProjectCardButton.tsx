'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TooltipContext } from '@/components/TooltipContainer';
import { tw } from '@/utils/Tailwind/TinyWind';
import { Props, ClickableProps } from '@/utils/React/Props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fab from '@fortawesome/free-brands-svg-icons';


export interface ProjectCardButtonProps {
    href?: string,
    src?: string,
    alt?: string,
    width?: number,
    height?: number,
    isMinigame?: boolean
}

const ProjectCardButton = ({ props = {}, onClick = () => {} }: Props<ProjectCardButtonProps> & ClickableProps): React.ReactNode => {
    const [isMinigameOver, setIsMinigameOver] = useState<boolean>(false);
    const tooltipContext = useContext(TooltipContext);

    const isLinkExternalUrl: boolean = props.href?.indexOf('https') != -1;
    const isLinkGithub: boolean = props.href?.indexOf('https://github.com/') != -1;
    const isLinkImage: boolean = props.src && props.alt ? true : false;

    const click = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
    };

    const clickEmptyLink = (): void => {
        onClick();
    }

    const isLinkDisplayed = (props.isMinigame && isMinigameOver) || !props.isMinigame;

    return (
        <span className={ProjectCardButtonContainerStyle} onClick={clickEmptyLink}>
            <Link 
                className={ProjectCardButtonStyle({ isLinkImage, isLinkGithub })}
                href={ isLinkDisplayed ? props.href ?? '' : '' }
                scroll={isLinkDisplayed}
                passHref={isLinkExternalUrl}
                { ...(isLinkExternalUrl ? { 'target': '_blank' } : {})}
                { ...(isLinkGithub ? { 'title': 'See source code' } : {})}
                onClick={click}
                ref={tooltipContext?.data.refs.setReference}
                {...tooltipContext?.getReferenceProps()}
            > {
                isLinkImage ?
                    <Image className={ProjectCardButtonImageStyle} src={props.src ?? ''} alt={props.alt ?? ''} width={props.width ?? 120} height={props.height ?? 40} />
                : isLinkGithub ?
                    <FontAwesomeIcon icon={fab.faGithub} size='lg' className='aspect-square'/>
                :
                    <span>See more</span>
            }
            </Link>
        </span>
    );
};

export default ProjectCardButton;


const ProjectCardButtonContainerStyle = tw([
    'ProjectCardButtonContainerStyle',
    'inline-flex',
    'spaced'
]);

const ProjectCardButtonStyle = ({ isLinkImage, isLinkGithub }: { isLinkImage: boolean, isLinkGithub: boolean }) => tw([
    'ProjectCardButtonStyle',
    'inline-block',
    isLinkGithub && 'p-2',
    !isLinkImage && 'bg-orange-light-400',
    !isLinkImage && 'hover:bg-orange-light-500',
    !isLinkImage && 'focus:bg-orange-light-500',
    !isLinkImage && 'transition-colors',
    !isLinkImage && 'text-white',
    !isLinkImage && 'text-sm',
    !isLinkImage && 'rounded',
    !isLinkImage && !isLinkGithub && 'px-4',
    !isLinkImage && !isLinkGithub && 'py-2',
    !isLinkImage && !isLinkGithub && 'font-medium'
]);

const ProjectCardButtonImageStyle = tw([
    'ProjectCardButtonImageStyle',
    'w-auto',
    'h-10'
]);