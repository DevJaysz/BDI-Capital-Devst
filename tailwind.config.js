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
        "customBG" : "url('../src//assets/images/BusinessSheet_Bg.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    // other plugins
  ],
}