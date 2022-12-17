const colors = require('tailwindcss/colors');

/**
 *  @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./renderer/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.zinc,
      blue: colors.blue,
      red: colors.red,
      indigo: colors.indigo,
      transparent: colors.transparent,
    },
    extend: {},
  },
  fontFamily: {
    sans: ['system-ui', 'sans-serif'],
  },
  plugins: [],
};
