/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors : {
      'first' : '#00cbff',
      'second' : "#00ffae",
      'wh' : "#ffffff",
      "bl" : "#000000",
      'gr' : "#8f9393",
      'bgc' : "#363a3f"
    },
    fontFamily : {
      'poppins' : ['Poppins']
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {},
  },
  plugins: [],
}

