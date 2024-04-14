// use server

import React, { ReactNode } from 'react';
import { tw } from '@/utils/Tailwind/TinyWind';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectCardContainer from '@/components/ProjectCardContainer';
import ProjectCard from '@/components/ProjectCard';
import { projectProps as props } from './ProjectsProps';


const Projects = (): ReactNode => {
    return(
        <section id="projects" className={ProjectsStyle}>
            <ProjectGrid>
                {
                    props.cardProps.map((project, index) =>
                        <ProjectCardContainer key={index} index={index}>
                            <ProjectCard { ...{ props: project }} />
                        </ProjectCardContainer>
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