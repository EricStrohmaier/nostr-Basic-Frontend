/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "#0c0e0c",
        background: "#fafaf9",
        primary: "#aab3b6",
        secondary: "#d7e3d3",
        accent: "#5b818f",
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [
    require("tailwindcss-filters"), // Make sure this line is included
  ],
};
