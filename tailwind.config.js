module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Chonburi", "cursive"],
        body: ["Raleway", "sans-serif"],
      },
      colors: {
        nnotes: {
          blue: "#360E4",
          black: "#30242A",
          red: "#FB6D6D",
          pink: "#FFC1EB",
          yellow: "#FFBB45",
          lilac: "#C7B8F8",
          green: "#6DC8C2",
          bg: "#0C1031",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
