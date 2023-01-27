const colors = require('tailwindcss/colors');
const lineClampPlugin = require('@tailwindcss/line-clamp');

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
      black: colors.black,
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  fontFamily: {
    sans: ['system-ui', 'sans-serif'],
  },
  plugins: [lineClampPlugin],
};
