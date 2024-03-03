/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        fontFamily: {
            roboto: ['Roboto Mono', 'monospace'],
        },
        extend: {
            colors: {
                greenmain: '#16FF80',
                greendark: '#1b5c60',
                greenwood: '#16ff7f99',
                dark: '#121312',
                darkmain: {
                    300: '#1B1F1E;',
                    500: '#1B1F1E;',
                    800: '#121615;',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
