/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'IBM Plex Sans, sans-serif',
    },
    extend: {
      fontFamily: {
        plex: 'proxima-nova, sans-serif',
        headline: 'ibm-plex-sans, sans-serif',
      },
      colors: {
        base: '#1f97bf',
        'base-dark': '#04607e',
        'base-light': '#bee1ec',
        'base-mid': '#0585b0',
        clemson: '#ff9321',
        'clemson-dark': '#ca6800',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
