/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        centuryGothic:['Century-Gothic']
      },
      backgroundImage:{
        "customBG" : "url('../src//assets//background//325489479_1212154686107383_7850534301493123193_n.jpg')"
      }
    },
  },
  plugins: [],
}