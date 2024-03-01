/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        green: {
          lemon: '#A8FF35',
          success: '#4ECB71',
        },

        gray: {
          primary: '#27272A',
          secondary: '#1A1A1D',
          back: '#121214',
        },
      },
    },
  },
  plugins: [],
}
