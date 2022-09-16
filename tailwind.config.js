/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cmky'],
  },
  plugins: [require('daisyui')],
};
