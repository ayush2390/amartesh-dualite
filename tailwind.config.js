/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "1350px": "1350px",
      md: "768px",
      sm: "425px",
      ssm: "495px",
      xmd: "1025px",
      ymd: "680px",
      zmd: "950px",
      xsm: "477px",
      ysm: "520px",
      zsm: "580px",
      "800px": "800px",
      "534px": "534px",
      "682px":"682px",
      "445px": "445px",
      "635px":"635px",
 "1215px": "1215px"
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        italiana: ["Italiana", "sans-serif"],
        robotoserif: ["Roboto-Serif", "sans-serif"]
      },
      rotate: {
        '-90': '-90deg', // Add custom rotation for -90 degrees
      },
      boxShadow: {
        'custom-text-shadow': '4px 4px 5.8px rgba(0, 0, 0, 0.54)',
      },
    },
  },
  plugins: [],
};
