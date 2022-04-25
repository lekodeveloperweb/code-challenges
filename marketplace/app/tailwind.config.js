/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme")

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: withOpacityValue("--color-accent"),
        light: withOpacityValue("--color-gray"),
      },
    },
  },
  plugins: [],
}
