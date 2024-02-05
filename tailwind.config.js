/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const fs = require('fs');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs': '480px'
            }
        }
    },
    plugins: [
        plugin(function({ addUtilities, postcss }) {
            const css = fs.readFileSync('./styles/scss/globals.scss', 'utf-8');
            addUtilities(postcss.parse(css).nodes);
        })
    ]
}
