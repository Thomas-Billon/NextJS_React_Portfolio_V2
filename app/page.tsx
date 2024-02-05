import React from 'react';
import Intro from '@/containers/Intro/Intro';
import Projects from '@/containers/Projects/Projects';
import Skills from '@/containers/Skills/Skills';
import Experience from '@/containers/Experience/Experience';
import Education from '@/containers/Education/Education';
import Contact from '@/containers/Contact/Contact';

const Home = (): React.ReactNode => {
    return (
        <main>
            <Intro/>
            <Projects/>
            <Skills/>
            <Experience/>
            <Education/>
            <Contact/>
            <h2 style={{ fontSize: '20px' }}>Content</h2>
            <ul>
                <li>Projects : Grid display with preview on click with see more button</li>
                <li>Skills : Grid display with animated transition and overflow (maybe divide by sections or tabs)</li>
                <li>Experience : Timeline with sepia effect on scroll down & timeline fills up</li>
                <li>Education : Same</li>
                <li>Contact : Regular contact form with Name / Email / Message inputs</li>
                <li>Socials : Font awesome style icons with svg animation on hover (on click on mobile & maybe delay it by 0.5s)</li>
                <li>Loading : Maybe needs some client side animated loading component</li>
            </ul>
        </main>
    );
};

export default Home;