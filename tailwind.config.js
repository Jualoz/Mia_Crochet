/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Muy importante para Angular
  ],
  theme: {
    extend: {
      colors: {
        palette1: {
          light: "#FFDCDC",
          lighter: "#FFF2EB",
          medium: "#FFE8CD",
          dark: "#FFD6BA",
        },
        palette2: {
          light: "#9ECAD6",
          medium: "#748DAE",
          soft: "#F5CBCB",
          lighter: "#FFEAEA",
          blue: "#9ECAD6",
        },
      },
      fontFamily: {
        quicksand: ["'Quicksand'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
