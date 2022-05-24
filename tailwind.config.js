const colors = require('tailwindcss/colors')
const Screens = require('./constants/breakpoints')
/** @type {import('tailwindcss/tailwind-config-default').TailwindConfigDefault} */
module.exports = {
  important: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {
        ...Screens,
      },

      colors: {
        neonblue: colors.cyan,
        primary: colors.emerald
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}