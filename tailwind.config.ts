import type { Config } from 'tailwindcss'

const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#003366',
        'nav-light': '#508cb1',
        'bg-dark': '#121212',
        'nav-dark': '#0c2d47',
        'text-link': '#fbbf24',
        'text-light': '#1f2937',
        'text-dark': '#e5e7eb',
        brown: {
          50: '#f9f3e4',
          100: '#f0e0c5',
          200: '#e6cca6',
          300: '#ddba87',
          400: '#d3a768',
          500: '#ca9550', // Cette valeur définit la couleur marron
          600: '#c08449',
          700: '#b97241',
          800: '#af613a',
          900: '#a64f32',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
module.exports = config
