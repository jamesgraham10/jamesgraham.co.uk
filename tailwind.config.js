module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      sans: ["filson-soft", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#1e1e1e",
        pureBlack: "#000",
        accent: "#0E349C",
        accentDark: "#0d2b7c",
        tertiary: "#e9efff",
      },
    },
  },
  plugins: [],
};
