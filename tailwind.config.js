/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Bebas Neue", "cursive"],
      body: ["Roboto Mono", "monospace"],
    },
    letterSpacing: {
      wild: "0.3rem",
    },
  },
  plugins: [],
};
