/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22577E',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
