'use client'

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { SkillEnum } from '@/utils/SkillEnum';
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
        <div className={
            (isActive ?
                'cursor-pointer col-span-1 md:col-span-2 row-span-2'
            :
                'cursor-pointer aspect-video'
            )}
            onClick={() => { onClick(index) }}>
            <div className="w-full h-full bg-white overflow-hidden rounded-lg md:aspect-video shadow-md">
                <div className="w-screen row">
                    <div className="!mx-0 container">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-4">
                            <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2 row-span-1 md:row-span-2">
                                <div className="h-full grid grid-cols-1 grid-rows-[1fr] md:grid-cols-2 md:grid-rows-[2fr_0.5rem_1fr_0.5rem_1fr]"> {
                                    props.images.map((image, index) =>
                                        <div className={
                                        index == 0 ?
                                            'col-span-2 row-span-1 aspect-video'
                                        :
                                            'hidden md:block col-span-1 row-span-2'
                                        }
                                        key={index}>
                                            <img className="w-full h-full"
                                                src={image.src} alt={image.alt} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col justify-center px-4 md:pl-0 pt-0 pb-4 md:py-4">
                                    <div className="mb-4 text-center md:text-left">
                                        <h4 className="inline-block text-xl font-medium">{props.title}</h4>
                                        <span className="text-gray-400"> - {props.year}</span>
                                    </div>
                                    <div className="mb-4"> {
                                        props.description.map((paragraph, index) => 
                                            <p className="text-justify [&:not(:last-child)]:mb-2"
                                            key={index}>
                                                {paragraph}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-8"> {
                                        props.tags.map((tag, index) => 
                                            <span className="px-2 py-0.5 bg-orange-light-100 text-orange-light-600 text-xs font-medium rounded border border-orange-light-400 spaced"
                                            key={index}>
                                                {tag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-center"> {
                                        props.links.map((link, index) => {
                                            const isLinkExternalUrl: boolean = link.href.indexOf('https') != -1;
                                            const isLinkGithub: boolean = link.href.indexOf('https://github.com/') != -1;
                                            const isLinkImage: boolean = link.src && link.alt ? true : false;

                                            let className: string = '';
                                            if (isLinkImage) {
                                                className = 'inline-block spaced';
                                            }
                                            else if (isLinkGithub) {
                                                className = 'inline-block p-2 bg-orange-light-400 hover:bg-orange-light-500 text-white text-sm rounded spaced';
                                            }
                                            else {
                                                className = 'inline-block px-4 py-2 bg-orange-light-400 hover:bg-orange-light-500 text-white text-sm font-medium rounded spaced';
                                            }

                                            return (
                                                <Link className={className}
                                                key={index}
                                                href={link.href}
                                                passHref={isLinkExternalUrl}
                                                { ...(isLinkExternalUrl ? { 'target': '_blank' } : {})}
                                                { ...(isLinkGithub ? { 'title': 'See source code' } : {})}
                                                onClick={ (event) => { event.stopPropagation() }}> {
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
