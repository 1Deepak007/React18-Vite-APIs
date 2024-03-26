/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/Components/Header/Header.jsx",
    "./src/Components/Footer/Footer.jsx",
    "./src/Components/About/Aboutus.jsx",
    "./src/Components/Contact/ContactUs.jsx",
    "./src/Components/Layout.jsx",
    "./src/Components/MainApp.jsx",
    "./src/main.jsx",
    "./src/*",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}