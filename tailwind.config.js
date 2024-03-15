/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        short: "132px",
      },
      colors: {
        "Dark-Blue": "#202733",
        "Dark-Grayish-Blue": "#313A48",
        grayish: "#4F5D74",
        "neon-green": "#53FFAA",
        text: "#CEE3E9",
      },
      boxShadow: {
        greenish: "0 0 20px 5px rgba(83, 255, 170, 0.5)",
      },
      letterSpacing: {
        wide: "3.457px",
      },
    },
  },
  plugins: [],
};
