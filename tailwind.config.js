/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "77% 47% 61% 49%" },
          "20%": { borderRadius: "89% 26% 70% 30%" },
          "40%": { borderRadius: "56% 93% 56% 94%" },
          "60%": { borderRadius: "68% 60% 94% 96%" },
          "80%": { borderRadius: "34% 74% 59% 82%" },
        },
      },
      animation: {
        blob: "blob 25s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
