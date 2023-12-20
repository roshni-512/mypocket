/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#5739E7',
        'second': ' #F8EDFF',
        'three': '#e00256',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2'
      }
    },
  },
  plugins: [],
}

