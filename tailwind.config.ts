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
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
module.exports = config
