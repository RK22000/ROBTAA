/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'persian_red': { DEFAULT: '#ca372d', 100: '#280b09', 200: '#501612', 300: '#78211a', 400: '#a12c23', 500: '#ca372d', 600: '#d95a51', 700: '#e2837d', 800: '#ecada8', 900: '#f5d6d4' }, 'aero': { DEFAULT: '#41bad9', 100: '#09272f', 200: '#134f5e', 300: '#1c768d', 400: '#259dbb', 500: '#41bad9', 600: '#66c8e1', 700: '#8cd6e8', 800: '#b2e4f0', 900: '#d9f1f7' }, 'misty_rose': { DEFAULT: '#fceae5', 100: '#561a0a', 200: '#ac3514', 300: '#e85e38', 400: '#f2a38e', 500: '#fceae5', 600: '#fcede9', 700: '#fdf2ef', 800: '#fef6f4', 900: '#fefbfa' }, 'peach': { DEFAULT: '#ffb997', 100: '#521b00', 200: '#a33600', 300: '#f55200', 400: '#ff8547', 500: '#ffb997', 600: '#ffc9ad', 700: '#ffd6c2', 800: '#ffe4d6', 900: '#fff1eb' }, 'davys_gray': { DEFAULT: '#4a434e', 100: '#0f0d0f', 200: '#1d1a1f', 300: '#2c272e', 400: '#3a353e', 500: '#4a434e', 600: '#6e6375', 700: '#93889a', 800: '#b7b0bb', 900: '#dbd7dd' }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

