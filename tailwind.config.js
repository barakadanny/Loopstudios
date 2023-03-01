/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        darkgray: '	#8c8c8c',
        dimgray: '#696969',
      },
    },
    screens: {
      'xsm': {'max': '375px'},
      'sm': {'max': '550px'},
      'md': {'max': '767px'},
      'lg': {'max': '991px'},
      'xl': {'max': '1200px'}
    },
  },
  plugins: [],
}
