module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#ff6b61',
      'primary-light': '#f5f2f0',
      seconday: '#214752',
      white: '#fff',
      'red-500': 'rgb(255, 0, 0)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
