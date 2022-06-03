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
        montserrat: ['Montserrat'],
        oxygen: ['Oxygen'],
        poppins: ['Poppins'],
        raleway: ['Raleway'],
        rubik: ['Rubik'],
        'nunito-sans': ['Nunito sans'],
        'work-sans': ['Work sans'],
        muli: ['Muli'],
        mulish: ['Mulish']
      }
    },
    colors: {
      gray: colors.gray,
      white: colors.white,
      green: colors.green,
      teal: colors.teal,
      red: colors.red,
      slate: colors.slate,
      'light-background': '#f8f8fd'
    }
  }
}
