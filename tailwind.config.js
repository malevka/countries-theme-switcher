/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-light": "var(--color-dark-light)",
      "gray-light": "var(--color-gray-light)",
      gray: "var(--color-gray)",
      white: "var(--color-white)",
      dark: "var(--color-dark)",
      black: "var(--color-black)"
    },
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
      },
      boxShadow: {
        "custom-sm": "0 0 10px rgba(0, 0, 0, 0.18)",
        "custom-md": "0 0 10px rgba(0, 0, 0, 0.4)"
      }
    }
  },
  darkMode: "class",
  plugins: []
};
