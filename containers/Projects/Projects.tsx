'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@/hooks/UseWindowSize';
import { projectsProps as props } from './ProjectsProps';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { animateProperty } from '@/utils/AnimateProperty';

import './Projects.scss';


export interface ProjectPosition {
    x: number,
    y: number,
    width: number,
    height: number
}

const Projects = (): React.ReactNode => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const observerRef = useRef<MutationObserver>();
    const cardPositions = useRef<ProjectPosition[]>([]);

    // Update grid display
    const observerCallback = () => {
        const projectCards: NodeListOf<HTMLElement> = document.querySelectorAll(".projects-container > .project-card");

        for (let projectCard of projectCards) {
            let isActive: boolean = false;
            if (projectCard.className == 'project-card active') {
                isActive = true;
            }

            const projectCardContainer: HTMLElement = projectCard.children[0] as HTMLElement;
            const projectCardContent: HTMLElement = projectCardContainer.children[0] as HTMLElement;
            const projectCardIndex: number = Array.prototype.slice.call(projectCard.parentNode!.children).indexOf(projectCard);

            if (projectCard.offsetWidth != cardPositions.current[projectCardIndex].width ||
                projectCard.offsetHeight != cardPositions.current[projectCardIndex].height) {
                const oldWidth: number = cardPositions.current[projectCardIndex].width;
                const oldHeight: number = cardPositions.current[projectCardIndex].height;
                const newWidth: number = projectCard.offsetWidth;
                const newHeight: number = projectCard.offsetHeight;
                
                projectCard.style.width = `${newWidth}px`;
                projectCard.style.height = `${newHeight}px`;
                projectCardContainer.style.width = `${oldWidth}px`;
                projectCardContainer.style.height = `${oldHeight}px`;
                projectCardContent.style.width = isActive ? `${newWidth}px` : `${oldWidth}px`;
                projectCardContent.style.height = isActive ? `${newHeight}px` : `${oldHeight}px`;

                animateProperty(projectCardContainer, 'width', newWidth, {onComplete : () => {
                    projectCard.style.width = '';
                    projectCardContainer.style.width = '';
                    projectCardContent.style.width = '';
                }});
                animateProperty(projectCardContainer, 'height', newHeight, {onComplete : () => {
                    projectCard.style.height = '';
                    projectCardContainer.style.height = '';
                    projectCardContent.style.height = '';
                }});

                cardPositions.current[projectCardIndex].width = newWidth;
                cardPositions.current[projectCardIndex].height = newHeight;
            }
        }
    }

    useEffect(() => {
        const observer: MutationObserver = new MutationObserver(observerCallback);
        const projectContainer: HTMLElement = document.querySelector(".projects-container") as HTMLElement;

        // This ensure the observer is only run once and the animation doesn't flicker even with strict mode on
        observerRef.current?.disconnect();
        observerRef.current = observer;
        observerRef.current?.observe(projectContainer, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
    }, []);

    const size = useWindowSize();

    useEffect(() => {
        const projectCards: NodeListOf<HTMLElement> = document.querySelectorAll(".projects-container > .project-card");
        const projectCardsArray: HTMLElement[] = [...projectCards];

        const newCardPositions: ProjectPosition[] = projectCardsArray.map(projectCard => {
            return {
                x: projectCard.offsetLeft,
                y: projectCard.offsetTop,
                width: projectCard.offsetWidth,
                height: projectCard.offsetHeight
            };
        });

        cardPositions.current = newCardPositions;
    }, [size]);

    return(
        <section id='projects'>
            <ul className='projects-container'>
                {
                    props.map((project, index) =>
                        <ProjectCard key={index} isActive={index == activeIndex} index={index} onClick={() => setActiveIndex(activeIndex != index ? index : -1)} { ...{ props: project }} />
                    )
                }
            </ul>
        </section>
    );
};

export default Projects;