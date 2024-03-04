/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#27DE97",
          light: "#C9FAD9",
          dark: "#48D75E",
        },
        red: {
          light: "#FCDEE0",
          dark: "#F65F81",
        },
        purple: {
          light: "#E8D9FA",
          dark: "#BE86FC",
        },
        orange: {
          light: "#FBE9C7",
          dark: "#FC967D",
        },
      },
    },
  },
  plugins: [],
};
