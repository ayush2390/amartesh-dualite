/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "1350px": "1350px",
      md: "768px",
      sm: "425px",
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        italiana: ["Italiana", "sans-serif"],
        robotoserif: ["Roboto-Serif", "sans-serif"]
      },
    },
  },
  plugins: [],
};
