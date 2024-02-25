'use client'

import React, { ReactNode } from 'react';
import { TagEnum } from '@/utils/TagEnum';

import Variables from '@/styles/scss/variables.module.scss';
import './ProjectCard.scss';


export interface ProjectCardProps {
    title: string,
    descriptions: string[],
    images: string[],
    links: string[],
    tags: TagEnum[],
    year: number
}

const ProjectCard = ({ isActive, index, onClick, props }: { isActive: boolean, index: number, onClick: (value: number) => void, props: ProjectCardProps }): ReactNode => {
    return (
        <div className={['project-card', isActive ? 'active' : ''].join(' ')} onClick={() => {onClick(index)}}>
            <div className="project-card-animated">
                <div className="project-card-sub-grid">
                    <div className="project-card-container">
                        <div className="project-card-image-container">
                            {
                                props.images.map((image, index) => 
                                    <div key={index} className="project-card-image"></div>
                                )
                            }
                        </div>
                        <div className="project-card-text-container">
                            <div><h4>{props.title}</h4> - <span>{props.year}</span></div>
                            <div>
                                {
                                    props.descriptions.map((description, index) => 
                                        <p key={index}>{description}</p>
                                    )
                                }
                            </div>
                            <div>
                                {
                                    props.links.map((link, index) => 
                                        <a key={index} href={link} onClick={(event) => {event.stopPropagation()}}>{link}</a>
                                    )
                                }
                            </div>
                            <div>
                                {
                                    props.tags.map((tag, index) => 
                                        <span key={index} className="project-card-text-tag">{TagEnum.toString(tag)}</span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;
