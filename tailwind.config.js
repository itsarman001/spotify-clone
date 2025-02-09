/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121212',
          hover: '#181818',
        },
        secondary: {
          DEFAULT: '#1E1E1E',
          hover: '#282828',
          muted: '#323232',
        },
        accent: {
          DEFAULT: '#1DB954',
          hover: '#1ED760',
          secondary: '#148F4C',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          muted: '#727272',
        },
        border: {
          DEFAULT: '#292929',
          secondary: '#3E3E3E',
        },
        play: {
          DEFAULT: '#1ED760',
          hover: '#1DB954',
        },
      },
    },
  },
  plugins: [],
}
