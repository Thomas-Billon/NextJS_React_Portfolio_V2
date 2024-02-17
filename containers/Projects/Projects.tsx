'use client'

import React, { useEffect, useRef, useState } from 'react';
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
    const init = useRef(false);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [cardPositions, setCardPositions] = useState<ProjectPosition[]>([]);

    // Toggle active project
    const toggleActiveIndex = (index: number): void => {
        if (activeIndex != index) {
            setActiveIndex(index);
        }
        else {
            setActiveIndex(-1);
        }
    }

    // Update grid display
    const observerCallback = () => {
        const projectCards: NodeListOf<HTMLElement> = document.querySelectorAll(".projects-container > .project-card") as NodeListOf<HTMLElement>;

        for (let projectCard of projectCards) {
            const projectCardContainer: HTMLElement = projectCard.children[0] as HTMLElement;
            const projectCardContent: HTMLElement = projectCardContainer.children[0] as HTMLElement;
            const projectCardIndex: number = Array.prototype.slice.call(projectCard.parentNode!.children).indexOf(projectCard);
            
            let isActive: boolean = false;
            if (projectCard.className == 'project-card active') {
                isActive = true;
            }
            
            if (projectCard.offsetWidth != cardPositions[projectCardIndex].width ||
                projectCard.offsetHeight != cardPositions[projectCardIndex].height) {
                if (isActive) {
                    projectCard.style.height = `calc(${cardPositions[projectCardIndex].width}px * (9/16) * 2 + (0.25rem * 4))`;
                    projectCardContainer.style.width = `${cardPositions[projectCardIndex].width}px`;
                    projectCardContainer.style.height = `${cardPositions[projectCardIndex].height}px`;
                    projectCardContent.style.width = `${projectCard.offsetWidth}px`;
                    projectCardContent.style.height = `${projectCard.offsetHeight}px`;
                }
                else {
                    projectCard.style.height = `calc((${cardPositions[projectCardIndex].width}px - (0.25rem * 4)) * (9/16) / 2)`;
                    projectCard.style.width = `calc(${projectCard.offsetHeight}px * (16/9))`;
                    projectCardContainer.style.width = `${cardPositions[projectCardIndex].width}px`;
                    projectCardContainer.style.height = `${cardPositions[projectCardIndex].height}px`;
                    projectCardContent.style.width = `${cardPositions[projectCardIndex].width}px`;
                    projectCardContent.style.height = `${cardPositions[projectCardIndex].height}px`;
                }

                console.log(`Item number ${projectCardIndex}: ${cardPositions[projectCardIndex].width} x ${cardPositions[projectCardIndex].height} -> ${projectCard.offsetWidth} x ${projectCard.offsetHeight}`);
                
                animateProperty(projectCardContainer, 'width', projectCard.offsetWidth, {onComplete : () => {
                    projectCardContainer.style.width = '';
                    projectCardContent.style.width = '';
                }});
                animateProperty(projectCardContainer, 'height', projectCard.offsetHeight, {onComplete : () => {
                    projectCardContainer.style.height = '';
                    projectCardContent.style.height = '';
                    if (!isActive) {
                        projectCard.style.width = '';
                        projectCard.style.height = '';
                    }
                }});

                cardPositions[projectCardIndex].width = projectCard.offsetWidth;
                cardPositions[projectCardIndex].height = projectCard.offsetHeight;
            }
        }
    }

    // Init project positions
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!init.current) {
                const observer: MutationObserver = new MutationObserver(observerCallback);
                const projectContainer: HTMLElement = document.querySelector(".projects-container") as HTMLElement;
                const projectCards: NodeListOf<HTMLElement> = document.querySelectorAll(".projects-container > .project-card") as NodeListOf<HTMLElement>;
        
                for (let projectCard of projectCards) {
                    setCardPositions(cardPositions => [...cardPositions, {
                        x: projectCard.offsetLeft,
                        y: projectCard.offsetTop,
                        width: projectCard.offsetWidth,
                        height: projectCard.offsetHeight
                    }]);
                }
        
                if (cardPositions.length > 0) {
                    init.current = true;
                    observer.observe(projectContainer, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
                }
            }
        }, 0);
        return () => clearTimeout(timeoutId);
    }, [cardPositions]);

    return(
        <section id='projects'>
            <ul className='projects-container'>
                {
                    props.map((project, index) =>
                        <ProjectCard key={index} isActive={index == activeIndex} index={index} onClick={() => toggleActiveIndex(index)} { ...{ props: project }} />
                    )
                }
            </ul>
        </section>
    );
};

export default Projects;