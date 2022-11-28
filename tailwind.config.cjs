/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts, jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
