// use server

import React, { ReactNode } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import ProjectGrid from '@/components/projects/grid/ProjectGrid';
import ProjectGridCell from '@/components/projects/grid/ProjectGridCell';
import ProjectCard from '@/components/projects/card/ProjectCard';
import { projectsProps as props } from './ProjectsProps';


const Projects = (): ReactNode => {
    return (
        <section id="projects" className={ProjectsStyle}>
            <ProjectGrid>
                {
                    props.cardProps.map((project, index) =>
                        <ProjectGridCell key={index} index={index}>
                            <ProjectCard {...{ props: project }} />
                        </ProjectGridCell>
                    )
                }
            </ProjectGrid>
        </section>
    );
};

export default Projects;


const ProjectsStyle = tw([
    'ProjectsStyle',
    'bg-off-white'
]);
