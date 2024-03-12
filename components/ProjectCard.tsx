// use server

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import ProjectCardButton, { ProjectCardButtonProps } from '@/components/ProjectCardButton';
import { SkillEnum } from '@/utils/SkillEnum';
import { tw } from '@/utils/Tailwind/TinyWind';
import { Props } from '@/utils/React/Props';


export interface ProjectCardProps {
    title?: string,
    description?: string[],
    images?: ProjectCardImageProps[],
    links?: ProjectCardButtonProps[],
    tags?: SkillEnum[],
    year?: number
}

export interface ProjectCardImageProps {
    src: string,
    alt: string
}

const ProjectCard = ({ props = {} }: Props<ProjectCardProps>): ReactNode => {
    return (
        <div className={ProjectCardStyle}>
            <div className={ProjectCardFullWidthStyle}>
                <div className={ProjectCardFullWidthContainerStyle}>
                    <div className={ProjectCardGridStyle}>
                        <div className={ProjectCardSubGridStyle}>
                            <div className={ProjectCardImageListStyle}> {
                                props.images?.map((image, index) =>
                                    <div key={index} className={ProjectCardImageItemStyle({ isFirstItem: (index == 0) })}>
                                        <Image className={ProjectCardImageStyle} src={image.src} alt={image.alt} width={1920} height={1080} />
                                    </div>
                                )}
                            </div>
                            <div className={ProjectCardTextStyle}>
                                <div className={ProjectCardTitleYearStyle}>
                                    <h4 className={ProjectCardTitleStyle}>{props.title}</h4>
                                    <span className={ProjectCardYearStyle}> - {props.year}</span>
                                </div>
                                <div className={ProjectCardDescriptionListStyle}> {
                                    props.description?.map((paragraph, index) => 
                                        <p key={index} className={ProjectCardDescriptionItemStyle}>{paragraph}</p>
                                    )}
                                </div>
                                <div className={ProjectCardTagListStyle}> {
                                    props.tags?.map((tag, index) => 
                                        <span key={index} className={ProjectCardTagItemStyle}>{tag}</span>
                                    )}
                                </div>
                                <div className={ProjectCardLinkListStyle}> {
                                    props.links?.map((link, index) =>
                                        <ProjectCardButton key={index} { ...{ props: link }}></ProjectCardButton>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;


const ProjectCardStyle = tw([
    'w-full',
    'h-full',
    'bg-white',
    'overflow-hidden',
    'rounded-lg',
    'md:aspect-video',
    'shadow-md'
]);

const ProjectCardFullWidthStyle = tw([
    'w-screen',
    'row'
]);

const ProjectCardFullWidthContainerStyle = tw([
    '!mx-0',
    'container'
]);

const ProjectCardGridStyle = tw([
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'xl:grid-cols-3',
    'gap-y-4',
    'md:gap-4'
]);

const ProjectCardSubGridStyle = tw([
    'h-full',
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'gap-4',
    'col-span-2',
    'row-span-1',
    'md:row-span-2'
]);

const ProjectCardImageListStyle = tw([
    'h-full',
    'grid',
    'grid-cols-1',
    'grid-rows-[1fr]',
    'md:grid-cols-2',
    'md:grid-rows-[2fr_0.5rem_1fr_0.5rem_1fr]'
]);

const ProjectCardImageItemStyle = ({ isFirstItem }: { isFirstItem: boolean }) => tw([
    isFirstItem && 'col-span-2',
    isFirstItem && 'row-span-1',
    isFirstItem && 'aspect-video',
    !isFirstItem && 'hidden',
    !isFirstItem && 'md:block',
    !isFirstItem && 'col-span-1',
    !isFirstItem && 'row-span-2'
]);

const ProjectCardImageStyle = tw([
    'full'
]);

const ProjectCardTextStyle = tw ([
    'flex',
    'flex-col',
    'justify-center',
    'px-4',
    'md:pl-0',
    'pt-0',
    'pb-4',
    'md:py-4'
]);

const ProjectCardTitleYearStyle = tw([
    'mb-4',
    'text-center',
    'md:text-left'
]);

const ProjectCardTitleStyle = tw([
    'inline-block',
    'text-xl',
    'font-medium'
]);

const ProjectCardYearStyle = tw([
    'text-gray-400'
]);

const ProjectCardDescriptionListStyle = tw([
    'mb-4'
]);

const ProjectCardDescriptionItemStyle = tw([
    'text-justify',
    '[&:not(:last-child)]:mb-2'
]);

const ProjectCardTagListStyle = tw([
    'mb-8'
]);

const ProjectCardTagItemStyle = tw([
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

const ProjectCardLinkListStyle = tw([
    'text-center'
]);