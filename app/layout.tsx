import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '@/styles/scss/globals.scss';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio créé avec Next.js et React',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="fr">
            <body className={roboto.className}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;