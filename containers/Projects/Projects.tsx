// use server

import React, { ReactNode } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import ProjectGrid from '@/components/projects/grid/ProjectGrid';
import ProjectGridItem from '@/components/projects/grid/ProjectGridItem';
import ProjectCard from '@/components/projects/card/ProjectCard';
import { projectsProps as props } from './ProjectsProps';


const Projects = (): ReactNode => {
    return(
        <section id="projects" className={ProjectsStyle}>
            <ProjectGrid>
                {
                    props.cardProps.map((project, index) =>
                        <ProjectGridItem key={index} index={index}>
                            <ProjectCard { ...{ props: project }} />
                        </ProjectGridItem>
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