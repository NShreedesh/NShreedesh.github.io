/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { borderRadius: "48% 52% 68% 32% / 42% 28% 72% 58%" },
          "5%": { borderRadius: "48% 52% 41% 59% / 66% 37% 63% 34%" },
          "15%": { borderRadius: "60% 40% 71% 29% / 63% 65% 35% 37%" },
          "20%": { borderRadius: "61% 39% 51% 49% / 57% 58% 42% 43%" },
          "25%": { borderRadius: "66% 34% 25% 75% / 47% 30% 70% 53%" },
          "30%": { borderRadius: "32% 68% 38% 62% / 65% 60% 40% 35%" },
          "35%": { borderRadius: "63% 37% 41% 59% / 35% 38% 62% 65%" },
          "40%": { borderRadius: "57% 43% 49% 51% / 55% 71% 29% 45%" },
          "45%": { borderRadius: "47% 53% 34% 66% / 65% 36% 64% 35%" },
          "50%": { borderRadius: "44% 56% 32% 68% / 69% 26% 74% 31%" },
          "55%": { borderRadius: "28% 72% 37% 63% / 71% 44% 56% 29%" },
          "60%": { borderRadius: "38% 62% 35% 65% / 74% 53% 47% 26%" },
          "65%": { borderRadius: "73% 27% 46% 54% / 54% 47% 53% 46%" },
          "70%": { borderRadius: "75% 25% 47% 53% / 49% 53% 47% 51%" },
          "75%": { borderRadius: "62% 38% 43% 57% / 55% 60% 40% 45%" },
          "80%": { borderRadius: "41% 59% 65% 35% / 73% 50% 50% 27%" },
          "85%": { borderRadius: "55% 45% 57% 43% / 73% 61% 39% 27%" },
          "90%": { borderRadius: "74% 26% 33% 67% / 40% 65% 35% 60%" },
          "95%": { borderRadius: "58% 42% 57% 43% / 53% 45% 55% 47%" },
          "100%": { borderRadius: "48% 52% 68% 32% / 42% 28% 72% 58%" },
        },
        page: {
          "0%": {
            transform: "translateX(-100px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },

      backgroundColor: {
        light: "#F8F8F8",
        dark: "#111111",
      },

      animation: {
        blob: "blob 60s ease-in-out infinite",
        page: "page .6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
