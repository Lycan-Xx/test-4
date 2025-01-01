/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    nunito: ["Nunito", "sans-serif"],
    lato: ["Lato", "sans-serif"],
    openSans: ["Open-Sans", "sans-serif"],
    poppins: ["Poppins", "sans-serif"],
    raleway: ["Raleway", "sans-serif"],
   },
   colors: {
    primary: "#f3a218",
    secondary: "#98A2B3",
    preselectTab: "#f0f2f5",
    selectedTab: "#fef6e7",
    selectedTabBorder: "#fbe2b7",
    greytext: "#475367",
    greytextlight: "#98a2b3",
    errorRed: "#d42620",
   },
  },
  plugins: [],
 },
}
