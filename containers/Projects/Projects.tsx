// use server

import React, { ReactNode } from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import ProjectGrid from '@/components/Project/Grid/ProjectGrid';
import ProjectGridItem from '@/components/Project/Grid/ProjectGridItem';
import ProjectCard from '@/components/Project/Card/ProjectCard';
import { projectProps as props } from './ProjectsProps';


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