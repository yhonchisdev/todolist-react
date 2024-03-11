/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        richBlack: "#0D0714",
        chineseBlack: "#15101C",
        darkPastelPurple: "#9E78CF",
        persianIndigo: "#3E1671",
        mediumAquamarine: "#78CFB0",
        sonicSilver: "#777777",
        white: "#FFFFFF",
      },
      width: {
        108: "432px",
      },
      spacing: {
        15: "60px",
      },
      animation: {
        fadeIn: "fadeIn .3s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
