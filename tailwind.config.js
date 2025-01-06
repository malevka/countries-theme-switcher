/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite"
      },
      keyframes: {
        scaleDownUp: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};
