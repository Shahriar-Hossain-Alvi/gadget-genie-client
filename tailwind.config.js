/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primaryColor: '#083061',
        secondaryColor: '#7A7A7A',
        thirdColor: '#2bb4e6'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

