// use server

import React, { ReactNode } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';


const Experience = (): ReactNode => {
    return (
        <section id="experience" className={ExperienceStyle}>
        </section>
    );
};

export default Experience;

const ExperienceStyle = tw([
    'ExperienceStyle',
    'bg-off-white'
]);
