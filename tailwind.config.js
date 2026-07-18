/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141110',
        ink2: '#1b1715',
        panel: '#211c19',
        line: 'rgba(242,236,224,.12)',
        gold: '#c9a24b',
        goldbright: '#e0c079',
        cream: '#f2ece0',
        muted: '#a99e91',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        label: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
