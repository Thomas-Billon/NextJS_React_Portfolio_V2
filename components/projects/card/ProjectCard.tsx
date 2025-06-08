// use server

import React from 'react';
import Image from 'next/image';
import ProjectCardButton, { ProjectCardButtonProps } from '@/components/projects/card/ProjectCardButton';
import ProjectCardClose from '@/components/projects/card/ProjectCardClose';
import ProjectCardButtonMinigame from '@/components/projects/card/ProjectCardButtonMinigame';
import TooltipContainer from '@/components/shared/tooltip/TooltipContainer';
import SkillFlag from '@/components/shared/SkillFlag';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';


export interface ProjectCardProps {
    title?: string;
    description?: string[];
    images?: ProjectCardImageProps[];
    links?: ProjectCardButtonProps[];
    tags?: SkillEnum[];
    year?: number;
}

export interface ProjectCardImageProps {
    src: string;
    alt: string;
}

const ProjectCard = ({ props = {}}: Props<ProjectCardProps>): React.ReactNode => {
    return (
        <div className={styles.ProjectCardStyle}>
            <div className={styles.ProjectCardFullWidthStyle}>
                <div className={styles.ProjectCardFullWidthContainerStyle}>
                    <div className={styles.ProjectCardGridStyle}>
                        <div className={styles.ProjectCardSubGridStyle}>
                            <div className={styles.ProjectCardImageListStyle}> {
                                props.images?.map((image, index) =>
                                    <div key={index} className={styles.ProjectCardImageItemStyle({ isFirstItem: (index == 0) })}>
                                        <Image className={styles.ProjectCardImageStyle} src={image.src} alt={image.alt} width={1920} height={1080} />
                                    </div>
                                )
                            } </div>
                            <div className={styles.ProjectCardTextStyle}>
                                <div className={styles.ProjectCardTitleYearStyle}>
                                    <h4 className={styles.ProjectCardTitleStyle}>{props.title}</h4>
                                    <span className={styles.ProjectCardYearStyle}> - {props.year}</span>
                                </div>
                                <div className={styles.ProjectCardDescriptionListStyle}> {
                                    props.description?.map((paragraph, index) => 
                                        <p key={index} className={styles.ProjectCardDescriptionItemStyle}>{paragraph}</p>
                                    )
                                } </div>
                                <div className={styles.ProjectCardTagStyle}> {
                                    props.tags?.map((tag, index) => 
                                        <SkillFlag key={index} props={{ skill: tag }}/>
                                    )
                                } </div>
                                <div className={styles.ProjectCardLinkListStyle}> {
                                    props.links?.map((link, index) => {
                                        return (
                                            link.isMinigame ?
                                                <TooltipContainer key={index}>
                                                    <ProjectCardButtonMinigame {...{ props: link }} />
                                                </TooltipContainer>
                                            :
                                                <ProjectCardButton key={index} {...{ props: link }} />
                                        );
                                    })
                                } </div>
                                <div className={styles.ProjectCardCloseContainerStyle}>
                                    <ProjectCardClose />
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


const styles = tw({
    ProjectCardStyle: [
        'w-full',
        'h-full',
        'card',
        'bg-white',
        'md:aspect-video'
    ],

    ProjectCardFullWidthStyle: [
        'w-screen',
        'row'
    ],

    ProjectCardFullWidthContainerStyle: [
        '!mx-0',
        'container'
    ],

    ProjectCardGridStyle: [
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'xl:grid-cols-3',
        'gap-y-4',
        'md:gap-4'
    ],

    ProjectCardSubGridStyle: [
        'h-full',
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'gap-4',
        'col-span-2',
        'row-span-1',
        'md:row-span-2'
    ],

    ProjectCardImageListStyle: [
        'h-full',
        'grid',
        'grid-cols-1',
        'grid-rows-[1fr]',
        'md:grid-cols-2',
        'md:grid-rows-[2fr_0.5rem_1fr_0.5rem_1fr]'
    ],

    ProjectCardImageItemStyle: ({ isFirstItem }: {
        isFirstItem: boolean
    }) => [
        isFirstItem && 'col-span-2',
        isFirstItem && 'row-span-1',
        isFirstItem && 'aspect-video',
        !isFirstItem && 'hidden',
        !isFirstItem && 'md:block',
        !isFirstItem && 'col-span-1',
        !isFirstItem && 'row-span-2'
    ],

    ProjectCardImageStyle: [
        'full'
    ],

    ProjectCardTextStyle: [
        'flex',
        'flex-col',
        'flex-wrap',
        'justify-center',
        'px-4',
        'md:pl-0',
        'pt-0',
        'pb-4',
        'md:py-4'
    ],

    ProjectCardTitleYearStyle: [
        'mb-4',
        'text-center',
        'md:text-left'
    ],

    ProjectCardTitleStyle: [
        'inline-block',
        'text-xl',
        'font-medium'
    ],

    ProjectCardYearStyle: [
        'text-base',
        'text-gray-400'
    ],

    ProjectCardDescriptionListStyle: [
        'mb-4'
    ],

    ProjectCardDescriptionItemStyle: [
        'text-sm',
        'text-justify',
        '[&:not(:last-child)]:mb-2'
    ],

    ProjectCardTagStyle: [
        'spaced',
        'mb-8'
    ],

    ProjectCardLinkListStyle: [
        'spaced',
        'justify-center'
    ],

    ProjectCardCloseContainerStyle: [
        'relative',
        'basis-full'
    ]
});
