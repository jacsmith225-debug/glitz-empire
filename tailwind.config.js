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

      // 🎉 New Animations + Keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInUp: "fadeInUp 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
