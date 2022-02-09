module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
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
