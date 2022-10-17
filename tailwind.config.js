/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    extend: {
      fontFamily: {
        plex: 'IBM Plex Sans, sans-serif',
        inter: 'Inter, sans-serif',
      },
      colors: {
        'base-brand': '#1f97bf',
        'base-dark': '#04607e',
        'base-dark-highlight': '#0a2b35',
        'base-light': '#bee1ec',
        'base-mid': '#0585b0',
        clemson: '#ff9321',
        'clemson-dark': '#ca6800',
        dark: '#120E17',
      },
    },
  },
  variants: {
    extends: {
      lineClamp: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
