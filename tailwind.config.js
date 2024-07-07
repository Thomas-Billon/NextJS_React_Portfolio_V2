/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const fs = require('fs');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './containers/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                'off-white': '#EFEFEF',
                'yellow': {
                    '50': '#FDF9E9',
                    '100': '#FCF2C5',
                    '200': '#FBE18D',
                    '300': '#F8C94C',
                    '400': '#F3B01C',
                    '500': '#D9910E',
                    '600': '#C4730A',
                    '700': '#9C510C',
                    '800': '#814112',
                    '900': '#6E3515',
                    '950': '#401A08'
                },
                'orange-light': {
                    '50': '#FFF8ED',
                    '100': '#FFF0D5',
                    '200': '#FEDDAA',
                    '300': '#FCC475',
                    '400': '#FAA03D',
                    '500': '#F88417',
                    '600': '#E9690D',
                    '700': '#CF550E',
                    '800': '#993E13',
                    '900': '#7B3513',
                    '950': '#431907'
                },
                'orange-dark': {
                    '50': '#FFF5ED',
                    '100': '#FEE8D6',
                    '200': '#FCCEAC',
                    '300': '#FAAB77',
                    '400': '#F77D40',
                    '500': '#F55B1A',
                    '600': '#D53C0F',
                    '700': '#BF2E0F',
                    '800': '#972615',
                    '900': '#7A2214',
                    '950': '#420E08'
                },
                'red': {
                    '50': '#FDF3F3',
                    '100': '#FCE4E5',
                    '200': '#FBCDCF',
                    '300': '#F7AAAD',
                    '400': '#F0797D',
                    '500': '#E54E53',
                    '600': '#D13136',
                    '700': '#C1292E',
                    '800': '#922226',
                    '900': '#792326',
                    '950': '#410E10'
                },
                'purple': {
                    '50': '#FEF5FD',
                    '100': '#FDE9FE',
                    '200': '#FAD3FB',
                    '300': '#F7B0F6',
                    '400': '#F181ED',
                    '500': '#E451DE',
                    '600': '#C831C0',
                    '700': '#A5269B',
                    '800': '#87217D',
                    '900': '#6F2066',
                    '950': '#640C5A'
                },
                'blue-dark': {
                    '50': '#F4F3FF',
                    '100': '#ECE9FE',
                    '200': '#DAD6FE',
                    '300': '#BFB5FD',
                    '400': '#9F8BFA',
                    '500': '#805CF6',
                    '600': '#6F3AED',
                    '700': '#6128D9',
                    '800': '#4C1FAC',
                    '900': '#441D95',
                    '950': '#281065'
                },
                'blue-light': {
                    '50': '#F3F7FC',
                    '100': '#E5EFF9',
                    '200': '#C6DEF1',
                    '300': '#93C3E6',
                    '400': '#59A4D7',
                    '500': '#3E92CC',
                    '600': '#246CA5',
                    '700': '#1E5786',
                    '800': '#1D4A6F',
                    '900': '#1D405D',
                    '950': '#13293E'
                }
            },
            screens: {
                'sm': '520px'
            },
            zIndex: {
                '100': '100'
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                'sm': '2rem'
            }
        }
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: [
        plugin(function({ addUtilities, postcss }) {
            const css = fs.readFileSync('./styles/scss/globals.scss', 'utf-8');
            addUtilities(postcss.parse(css).nodes);
        })
    ]
};
