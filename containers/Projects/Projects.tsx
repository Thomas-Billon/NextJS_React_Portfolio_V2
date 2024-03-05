'use client'

import React, { useEffect, useState } from 'react';
import { projectsProps as props } from './ProjectsProps';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useGridAnimation } from '@/hooks/UseGridAnimation';

import './Projects.scss';


const Projects = (): React.ReactNode => {
    const [activeIndex, setActiveIndex] = useState(-1);

    if (typeof document !== 'undefined') {
        useGridAnimation(document.querySelector('.projects-grid'));
    }

    return(
        <section id="projects" className='bg-off-white'>
            <ul className="projects-grid container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-4 md:auto-rows-fr">
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