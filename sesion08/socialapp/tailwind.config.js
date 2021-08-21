module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: '#ff6b61',
      main_light: '#f5f2f0',
      secondary: '#214752',
      white: '#fff',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
