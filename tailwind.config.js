/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "1350px": "1350px",
      md: "768px",
      sm: "425px",
      ssm: "495px",
      xmd: "1020px",
      ymd: "680px",
      zmd: "950px",
      xsm: "477px",
      ysm: "520px",
      zsm: "580px",
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
