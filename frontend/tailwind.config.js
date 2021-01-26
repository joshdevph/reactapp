module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'poppins': [ 'Poppins' ]
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/img/mobile.png')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
