/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "calc-primary": "#2196F3",
        "calc-secondary": "#1186e3",
      },
    },
    fontFamily: {
      Header: ["montserrat, sans-serif"],
      Body: ["poppins, sans-serif"],
    },
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  safelist: [
    {
      pattern: /^(bg|text)-(sky|emerald|yellow|red)-/,
      variants: [],
    },
  ],
  plugins: [],
}

