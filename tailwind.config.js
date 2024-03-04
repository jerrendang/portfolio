/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    colors: {
      grey: '#e5e5e5',
      red: colors.red,
      transparent: 'transparent',
      black: '#062c43',
      white: '#ced7e0',
      orange: '#fca311',
      blue: '#054569',
      pink: '#c874b2',
      turqoise: '#5591a9',
      skyBlue: '#9ccddc',
      magenta: '#e600e6',
      yellow: '#f7d560'
    },
    extend: {},
  },
  plugins: [],
}

// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0