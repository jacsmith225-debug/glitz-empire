/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        dark: "#111111",
        light: "#FFFFFF",
      },
      fontFamily: {
        luxury: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 10px rgba(212, 175, 55, 0.35)",
      },
    },
  },
  plugins: [],
};
