// use server

import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import '@/styles/scss/layout.scss';


const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio créé avec Next.js et React'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en-US">
            <body className={montserrat.className}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;