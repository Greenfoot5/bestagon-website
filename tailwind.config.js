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
          smasher: '#e11E5e',
          shooter: '#1FCF89',
          laser: '#22C1D7',
          lancer: '#3444AB',
          gunner: '#9638F2',
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
