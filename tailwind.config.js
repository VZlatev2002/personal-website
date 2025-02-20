const { url } = require('inspector')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "https://use.typekit.net/vvu5kgt.css",
  ],
  theme: {
    extend: {},
    colors: {
      customBG: '#3e678a',
      customHeading: '#754305',
      customSubtext: '#754305',
      customText: '#754305',
      customTitle: '#754305',
      customLine: '#a66311',
      customBlockquote: '#a14e00',
      // customSubBG: '#ebebeb',
    },
    backgroundImage: {
      'grid-background': "url('/images/new-grid.jpg')",
    },
    fontFamily: {
      'arvo': ['arvo', 'serif'],
      'poppins': ['poppins', 'sans-serif'],
      'philosopher': ['philosopher', 'sans-serif'],
      'cabin-sketch-bold': ['cabin-sketch-bold', 'sans-serif'],
      'cabin-sketch-regular': ['cabin-sketch-regular', 'sans-serif'],

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

