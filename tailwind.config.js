const colors = require('tailwindcss/colors')
const Screens = require('./constants/breakpoints')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ...Screens
      },

      colors: {
        neonblue: colors.cyan,
        primary: colors.sky
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}