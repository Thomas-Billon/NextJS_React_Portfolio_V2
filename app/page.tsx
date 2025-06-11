// use server

import React from 'react';
import Intro from '@/containers/intro/Intro';
import Projects from '@/containers/projects/Projects';
import Skills from '@/containers/skills/Skills';
import History from '@/containers/history/History';
import Contact from '@/containers/contact/Contact';


const Home = (): React.ReactNode => {
    return (
        <main>
            <Intro/>
            <Projects/>
            <Skills/>
            <History/>
            <Contact/>
            <h2 style={{ fontSize: '20px' }}>Content</h2>
            <ul>
                <li>History : Timeline with sepia effect on scroll down & timeline fills up</li>
                <li>Contact : Regular contact form with Name / Email / Message inputs</li>
                <li>Socials : Font awesome style icons with svg animation on hover (on click on mobile & maybe delay it by 0.5s)</li>
                <li>Loading : Maybe needs some client side animated loading component</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
            </ul>
        </main>
    );
};

export default Home;
