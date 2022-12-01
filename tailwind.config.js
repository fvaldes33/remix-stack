const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      animation: {
        show: "show 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideRight: "slideRight 0.3s ease-in-out forwards",
        slideUp: "slideUp 0.3s ease-in-out forwards",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translatey(30px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
