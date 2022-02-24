// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue, ts}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        poppins: ['Poppins'],
        quicksand: ['Quicksand']
      }
    },
    colors: {
      gray: colors.gray,
      white: colors.white,
      green: colors.green,
      teal: colors.teal,
      red: colors.red
    }
  }
}
