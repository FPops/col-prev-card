/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      "borange":'hsl(31,77%,52%)',
      "dcyan":'hsl(184,100%,22%)',
      "vdcyan":'hsl(179,100%,13%)',
      "twhite":'hsla(0,0%,100%,0.75)',
      "vlgray":'hsl(0,0%,95%)'
    }
  },
  plugins: [],
}
