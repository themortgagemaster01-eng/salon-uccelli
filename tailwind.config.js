/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f7f2e7',
        ink2: '#efe6d3',
        panel: '#faf6ec',
        line: 'rgba(58,71,53,.14)',
        gold: '#b58a3f',
        goldbright: '#d1aa5c',
        cream: '#2b3328',
        muted: '#6e7a64',
        sage: '#7c9473',
        sagebright: '#9fb496',
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
