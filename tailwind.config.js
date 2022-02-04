module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px",
      },
    },
  },
  plugins: [],
};
