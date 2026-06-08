import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3f8",
          100: "#d9e5ef",
          700: "#123655",
          800: "#0b2742",
          900: "#071d33",
          950: "#041426",
        },
        ivory: "#fbf7ef",
        parchment: "#f5eddc",
        gold: {
          300: "#d8bf7a",
          400: "#c8a95b",
          500: "#a98638",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        academic: "0 24px 70px -35px rgba(4, 20, 38, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
