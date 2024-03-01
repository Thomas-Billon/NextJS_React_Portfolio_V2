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
        <section id="projects">
            <ul className="projects-grid">
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