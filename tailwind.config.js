/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet100: "#ECEBFF",
        violet200: "#C3C0F3",
        violet300: "#9B94E7",
        violet400: "#7269DB",
        violet500: "#493DCF",
        violet600: "#382EAB",
        violet700: "#271F86",
        violet800: "#150E73",
        violet900: "#05003D",

        gray100: "#F3F5F9",
        gray200: "#C2C5CB",
        gray300: "#91959E",
        gray400: "#626875",
        gray500: "#2F3542",
        gray600: "#242837",
        gray700: "#191B2D",
        gray800: "#0E0E22",
        gray900: "#030117",

        brown:"#8F694D",
        green:"#70D357",
        yellow:"#DFB05D"
      },
      fontFamily:{
        regular:["Gelion","sans-serif"],
      }
    },
  },
  plugins: [],
}
