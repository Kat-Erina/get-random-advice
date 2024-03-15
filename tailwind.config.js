/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Blue": "#202733",
        "Dark-Grayish-Blue": "#313A48",
        grayish: "#4F5D74",
        "neon-green": "#53FFAA",
        text: "#CEE3E9",
      },
      boxShadow: {
        "greenish-shadow": "30px 50px 80px 0px rgba(0, 0, 0, 0.10)",
      },
      letterSpacing: {
        wide: "3.457px",
      },
    },
  },
  plugins: [],
};
