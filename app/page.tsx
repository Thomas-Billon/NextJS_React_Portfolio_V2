import React from 'react';
import Intro from './intro';

const Home = (): React.ReactNode => {
    return (
        <main>
            <Intro/>
            <h2 style={{fontSize: '20px'}}>Content</h2>
            <ul>
                <li>Loading : Maybe needs some client side animated loading component</li>
                <li>Introduction : Particles with static background and three js foreground (items explosion style on page display)</li>
                <li>Projects : Grid display with preview on click with see more button</li>
                <li>Skills : Grid display with animated transition and overflow (maybe divide by sections or tabs)</li>
                <li>Experience : Timeline with sepia effect on scroll down & timeline fills up</li>
                <li>Education : Same</li>
                <li>Contact : Regular contact form with Name / Email / Message inputs</li>
                <li>Socials : Font awesome style icons with svg animation on hover (on click on mobile & maybe delay it by 0.5s)</li>
                <li>Particles adjustment</li>
                <li>Background & details creation</li>
            </ul>
            <br/>
            <h2 style={{fontSize: '20px'}}>Style</h2>
            <ul>
                <li>Colors : #040F16 ? #02182B ? #0076C4 ? #D7263D ?</li>
                <li>Shapes : </li>
                <li>Fonts : </li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
                <li>v</li>
            </ul>
        </main>
    )
}

export default Home;