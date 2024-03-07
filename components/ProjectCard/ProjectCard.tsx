'use client'

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { SkillEnum } from '@/utils/SkillEnum';
import { css } from '@/utils/Tailwind/TinyWind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fab from '@fortawesome/free-brands-svg-icons';

import './ProjectCard.scss';


export interface ProjectCardProps {
    title: string,
    description: string[],
    images: { src: string, alt: string }[],
    links: { href: string, src?: string, alt?: string, isMinigame?: boolean }[],
    tags: SkillEnum[],
    year: number
}

const ProjectCard = ({ isActive, index, onClick, props }: { isActive: boolean, index: number, onClick: (value: number) => void, props: ProjectCardProps }): ReactNode => {
    return (
        <div className={ProjectCardStyle({ isActive })} onClick={() => { onClick(index) }}>
            <div className={ProjectCardBackgroundStyle}>
                <div className={ProjectCardFullWidthStyle}>
                    <div className={ProjectCardFullWidthContainerStyle}>
                        <div className={ProjectCardGridStyle}>
                            <div className={ProjectCardSubGridStyle}>
                                <div className={ProjectCardImageListStyle}> {
                                    props.images.map((image, index) => {
                                        const isFirstItem: boolean = index == 0;

                                        return (
                                            <div key={index} className={ProjectCardImageItemStyle({ isFirstItem })}>
                                                <img className={ProjectCardImageStyle} src={image.src} alt={image.alt} />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={ProjectCardTextStyle}>
                                    <div className={ProjectCardTitleYearStyle}>
                                        <h4 className={ProjectCardTitleStyle}>{props.title}</h4>
                                        <span className={ProjectCardYearStyle}> - {props.year}</span>
                                    </div>
                                    <div className={ProjectCardDescriptionListStyle}> {
                                        props.description.map((paragraph, index) => 
                                            <p key={index} className={ProjectCardDescriptionItemStyle}>{paragraph}</p>
                                        )}
                                    </div>
                                    <div className={ProjectCardTagListStyle}> {
                                        props.tags.map((tag, index) => 
                                            <span key={index} className={ProjectCardTagItemStyle}>{tag}</span>
                                        )}
                                    </div>
                                    <div className={ProjectCardLinkListStyle}> {
                                        props.links.map((link, index) => {
                                            const isLinkExternalUrl: boolean = link.href.indexOf('https') != -1;
                                            const isLinkGithub: boolean = link.href.indexOf('https://github.com/') != -1;
                                            const isLinkImage: boolean = link.src && link.alt ? true : false;

                                            return (
                                                <Link className={ProjectCardLinkItemStyle({ isLinkImage, isLinkGithub })}
                                                    key={index}
                                                    href={link.href}
                                                    passHref={isLinkExternalUrl}
                                                    { ...(isLinkExternalUrl ? { 'target': '_blank' } : {})}
                                                    { ...(isLinkGithub ? { 'title': 'See source code' } : {})}
                                                    onClick={ (event) => { event.stopPropagation() }}
                                                > {
                                                    isLinkImage ?
                                                        <img src={link.src} alt={link.alt} />
                                                    : isLinkGithub ?
                                                        <FontAwesomeIcon icon={fab.faGithub} size='lg' className='aspect-square'/>
                                                    :
                                                        <span>See more</span>
                                                }
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;


const ProjectCardStyle = ({ isActive }: { isActive: boolean }) => css([
    'cursor-pointer',
    isActive && 'col-span-1',
    isActive && 'md:col-span-2',
    isActive && 'row-span-2',
    !isActive && 'aspect-video'
]);

const ProjectCardBackgroundStyle = css([
    'w-full',
    'h-full',
    'bg-white',
    'overflow-hidden',
    'rounded-lg',
    'md:aspect-video',
    'shadow-md'
]);

const ProjectCardFullWidthStyle = css([
    'w-screen',
    'row'
]);

const ProjectCardFullWidthContainerStyle = css([
    '!mx-0',
    'container'
]);

const ProjectCardGridStyle = css([
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'xl:grid-cols-3',
    'gap-y-4',
    'md:gap-4'
]);

const ProjectCardSubGridStyle = css([
    'h-full',
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'gap-4',
    'col-span-2',
    'row-span-1',
    'md:row-span-2'
]);

const ProjectCardImageListStyle = css([
    'h-full',
    'grid',
    'grid-cols-1',
    'grid-rows-[1fr]',
    'md:grid-cols-2',
    'md:grid-rows-[2fr_0.5rem_1fr_0.5rem_1fr]'
]);

const ProjectCardImageItemStyle = ({ isFirstItem }: { isFirstItem: boolean }) => css([
    isFirstItem && 'col-span-2',
    isFirstItem && 'row-span-1',
    isFirstItem && 'aspect-video',
    !isFirstItem && 'hidden',
    !isFirstItem && 'md:block',
    !isFirstItem && 'col-span-1',
    !isFirstItem && 'row-span-2'
]);

const ProjectCardImageStyle = css([
    'full'
]);

const ProjectCardTextStyle = css ([
    'flex',
    'flex-col',
    'justify-center',
    'px-4',
    'md:pl-0',
    'pt-0',
    'pb-4',
    'md:py-4'
]);

const ProjectCardTitleYearStyle = css([
    'mb-4',
    'text-center',
    'md:text-left'
]);

const ProjectCardTitleStyle = css([
    'inline-block',
    'text-xl',
    'font-medium'
]);

const ProjectCardYearStyle = css([
    'text-gray-400'
]);

const ProjectCardDescriptionListStyle = css([
    'mb-4'
]);

const ProjectCardDescriptionItemStyle = css([
    'text-justify',
    '[&:not(:last-child)]:mb-2'
]);

const ProjectCardTagListStyle = css([
    'mb-8'
]);

const ProjectCardTagItemStyle = css([
    'px-2',
    'py-0.5',
    'bg-orange-light-100',
    'text-orange-light-600',
    'text-xs',
    'font-medium',
    'rounded border',
    'border-orange-light-400',
    'spaced'
]);

const ProjectCardLinkListStyle = css([
    'text-center'
]);

const ProjectCardLinkItemStyle = ({ isLinkImage, isLinkGithub }: { isLinkImage: boolean, isLinkGithub: boolean }) => css([
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