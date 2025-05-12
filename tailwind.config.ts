/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // Enable dark mode variant
  theme: {
    extend: {
      keyframes: {
        bounceX: {
          '0%,100%':{
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation:{
        'bounce-x': 'bounceX 1s infinite'
      },
      colors: {
        // Dark theme
        //bg
        'primary-dark': 'rgb(60, 22, 66)',
        'secondary-dark': 'rgb(8, 99, 117)',
        'accent-dark': 'rgb(29, 211, 176)',
        'highlight-dark': 'rgb(175, 252, 65)',
        'border-dark': 'rgb(175, 252, 65)',
        'surface-dark': 'rgb(178, 255, 158)',
        'text-dark': 'rgb(178, 255, 158)',

        // Light theme
        //bg
        'primary-light': 'rgb(244, 162, 97)',
        'secondary-light': 'rgb(231, 111, 81)',
        'accent-light': 'rgb(233, 196, 106)',
        'highlight-light': 'rgb(42, 157, 143)',
        'border-light': 'rgb(42, 157, 143)',
        'surface-light': 'rgb(38, 70, 83)',
        'text-light': 'rgb(38, 70, 83)',
      },
    },
  },
  plugins: [],
};
