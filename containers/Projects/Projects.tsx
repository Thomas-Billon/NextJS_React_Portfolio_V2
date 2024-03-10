'use client'

import React, { ReactNode, useEffect, useState } from 'react';
import { useGridAnimation } from '@/hooks/UseGridAnimation';
import { tw } from '@/utils/Tailwind/TinyWind';
import ProjectCard from '@/components/ProjectCard';
import { projectProps as props } from './ProjectsProps';


const Projects = (): ReactNode => {
    const [activeIndex, setActiveIndex] = useState(-1);

    if (typeof document !== 'undefined') {
        useGridAnimation(document.querySelector('#projects-grid'));
    }

    return(
        <section id="projects" className={ProjectsStyle}>
            <ul id="projects-grid" className={ProjectsGridStyle}>
                {
                    props.map((project, index) =>
                        <ProjectCard
                            key={index}
                            isActive={index == activeIndex}
                            index={index}
                            onClickActivable={() => setActiveIndex(activeIndex != index ? index : -1)}
                            { ...{ props: project }}
                        />
                    )
                }
            </ul>
        </section>
    );
};

export default Projects;


const ProjectsStyle = tw([
    'bg-off-white'
]);

const ProjectsGridStyle = tw([
    'container',
    'mx-auto',
    'py-16',
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'xl:grid-cols-3',
    'gap-y-4',
    'md:gap-4',
    'md:auto-rows-fr'
]);