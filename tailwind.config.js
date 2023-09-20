/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0d0d0d",
        secondaryColor: "#2e2d2d",
        textColor1: "#8e8e8e",
        greenColor: "#89caa0",
        itemBackgroundColor: "#e8e8e8",
      },
    },
  },
  plugins: [],
};
