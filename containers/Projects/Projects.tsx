// use server

import React, { ReactNode } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import ProjectGrid from '@/components/project/grid/ProjectGrid';
import ProjectGridItem from '@/components/project/grid/ProjectGridItem';
import ProjectCard from '@/components/project/card/ProjectCard';
import { projectProps as props } from './ProjectProps';


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