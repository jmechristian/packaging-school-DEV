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
      backgroundImage: {
        'dark-mobile':
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1666493878/pschool/gradient-bg3_mobile_hd9t2i.png')",
        'dark-lg':
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1666045015/pschool/gradient-bg4_rrmnwf.webp')",
        'bootcamp-mobile':
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1666706513/pschool/bootcamp_bg_im0gtc.png')",
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
