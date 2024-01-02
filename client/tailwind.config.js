/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brandPrimary'  : '#4CAF4F',
        'neutralWhite'  : '#FFFFFF',
        'neutralDGrey'  : '#4D4D4D',
        'neutralGrey'   : '#717171',
        'neutralLGrey'  : '#89939E',
        'neutralSilver' : '#F5F7FA',
        'neutralBlack'  : '#263238',
        "gray900"       : "#18191F",
        "neutralBlack"  : "#263238",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

