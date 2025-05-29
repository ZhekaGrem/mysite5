/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // Enable dark mode variant
  theme: {
    extend: {
      keyframes: {
        bounceX: {
          '0%,100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'bounce-x': 'bounceX 1s infinite',
        marquee: 'marquee 30s linear infinite',
      },
      colors: {
        // Dark theme
        //bg
        'primary-dark': 'rgb(26, 27, 30)',
        'secondary-dark': 'rgb(8, 99, 117)',
        'accent-dark': 'rgb(34, 211, 176)',
        'hover-dark': 'rgb(29, 211, 176)',
        'highlight-dark': 'rgb(175, 252, 65)',
        'border-dark': 'rgb(175, 252, 65)',
        'surface-dark': 'rgb(178, 255, 158)',
        'text-dark': 'rgb(178, 255, 158)',
        'h1-dark': 'rgb(175, 252, 65)',
        'h2-dark': 'rgb(34, 211, 176)',

        // Light theme
        //bg
        'primary-light': 'rgb(255, 200, 150)',
        'secondary-light': 'rgb(180, 85, 55)',
        'accent-light': 'rgb(180, 85, 55)',
        'hover-light': 'rgb(180, 85, 55)',
        'highlight-light': 'rgb(42, 157, 143)',
        'border-light': 'rgb(42, 157, 143)',
        'surface-light': 'rgb(38, 70, 83)',
        'text-light': 'rgb(38, 70, 83)',
        'h1-light': 'rgb(42, 157, 143)',
        'h2-light': 'rgb(180, 85, 55)',
      },
      spacing: {
        xs: '0.75', // 12px
        sm: '0.875', // 14px
        base: '1', // 16px
        lg: '1.125', // 18px
        xl: '1.25', // 20px
        '2xl': '1.5', // 24px
        '3xl': '1.875', // 30px
        '4xl': '2.25', // 36px
        '5xl': '3', // 48px
      },
    },
  },
  plugins: [],
};
