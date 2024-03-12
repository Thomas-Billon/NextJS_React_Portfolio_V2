'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { tw } from '@/utils/Tailwind/TinyWind';
import { Props } from '@/utils/React/Props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fab from '@fortawesome/free-brands-svg-icons';


export interface ProjectCardButtonProps {
    href?: string,
    src?: string,
    alt?: string,
    isMinigame?: boolean
}

const ProjectCardButton = ({ props = {} }: Props<ProjectCardButtonProps>): ReactNode => {
    const isLinkExternalUrl: boolean = props.href?.indexOf('https') != -1;
    const isLinkGithub: boolean = props.href?.indexOf('https://github.com/') != -1;
    const isLinkImage: boolean = props.src && props.alt ? true : false;

    return (
        <Link className={ProjectCardLinkItemStyle({ isLinkImage, isLinkGithub })}
            href={props.href ?? ''}
            passHref={isLinkExternalUrl}
            { ...(isLinkExternalUrl ? { 'target': '_blank' } : {})}
            { ...(isLinkGithub ? { 'title': 'See source code' } : {})}
            onClick={ (event) => { event.stopPropagation(); }}
        > {
            isLinkImage ?
                <Image src={props.src ?? ''} alt={props.alt ?? ''} width={120} height={40} />
            : isLinkGithub ?
                <FontAwesomeIcon icon={fab.faGithub} size='lg' className='aspect-square'/>
            :
                <span>See more</span>
        }
        </Link>
    );
};

export default ProjectCardButton;


const ProjectCardLinkItemStyle = ({ isLinkImage, isLinkGithub }: { isLinkImage: boolean, isLinkGithub: boolean }) => tw([
    'inline-block',
    'spaced',
    isLinkGithub && 'p-2',
    !isLinkImage && 'bg-orange-light-400',
    !isLinkImage && 'hover:bg-orange-light-500',
    !isLinkImage && 'text-white',
    !isLinkImage && 'text-sm',
    !isLinkImage && 'rounded',
    !isLinkImage && !isLinkGithub && 'px-4',
    !isLinkImage && !isLinkGithub && 'py-2',
    !isLinkImage && !isLinkGithub && 'font-medium'
]);