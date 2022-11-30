/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        bestagon: {
          background: '#1e202c',
          // Turrets
          any: {
            DEFAULT: '#989898',
            light: '#cecece',
            dark: '#737373',
          },
          smasher: {
            DEFAULT: '#df1d5c',
            light: '#f02d8f',
            dark: '#a71545',
          },
          shooter: {
            DEFAULT: '#1ecd88',
            light: '#30e5c6',
            dark: '#179b67',
          },
          laser: {
            DEFAULT: '#21bfd8',
            light: '#30e1e9',
            dark: '#1790a0',
          },
          lancer: {
            DEFAULT: '#4857e0',
            light: '#6987ed',
            dark: '#3342aa',
          },
          gunner: {
            DEFAULT: '#9c36f8',
            light: '#ce56fd',
            dark: '#742bba',
          },
          choker: {
            DEFAULT: '#f8653a',
            light: '#f8653a',
            dark: '#bb4c29',
          }
        }
      },
      fontFamily: {
        'futured': ['futured'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
