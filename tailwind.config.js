// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue, ts}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand'],
        comfortaa: ['Comfortaa'],
        oxygen: ['Oxygen']
      }
    },
    colors: {
      gray: colors.gray,
      white: colors.white,
      green: colors.green,
      teal: colors.teal,
      red: colors.red,
      slate: colors.slate
    }
  }
}
