import type { Config } from 'tailwindcss'

const { nextui } = require('@nextui-org/react')
const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    // container: {
    //   center: true,
    //   padding: '2rem',
    //   screens: {
    //     '2xl': '1400px',
    //   },
    // },
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      darkMode: 'class',
    },
  },
  plugins: [require('tailwindcss-animate'), nextui()],
} satisfies Config

export default config
