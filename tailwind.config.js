module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:{
          100: '#f5f9f8'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}