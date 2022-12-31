/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      serif: ['Noto Serif', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      fontFamily: {
        logo: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#4fa2ff',
          50: '#f2f8ff',
          100: '#e6f1ff',
          200: '#c8e0ff',
          300: '#a9ceff',
          400: '#7db8ff',
          500: '#4fa2ff',
          600: '#268bff',
          700: '#0074e6',
          800: '#005db2',
          900: '#00457f',
        },
      },
      fontSize: {
        '2xs': ['0.5rem', '0.75rem'],
        '3xs': ['0.375rem', '0.5rem'],
        '4xs': ['0.25rem', '0.375rem'],
      },
      patterns: {
        opacities: {
          100: '1',
          80: '.80',
          60: '.60',
          40: '.40',
          20: '.20',
          10: '.10',
          5: '.05',
        },
        sizes: {
          1: '0.25rem',
          2: '0.5rem',
          4: '1rem',
          6: '1.5rem',
          8: '2rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          32: '8rem',
        },
      },
    },
  },
  plugins: [
    require('./lib/si-tw-plugin.cjs'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-bg-patterns'),
  ],
};
