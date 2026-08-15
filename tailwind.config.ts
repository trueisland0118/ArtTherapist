import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDF7EE",
        beige: "#F5EBDF",
        peach: "#FBD5C0",
        pink: {
          soft: "#FBD9DF",
          DEFAULT: "#F2A6B4",
          deep: "#E68BA0",
        },
        lavender: {
          soft: "#E8DEF5",
          DEFAULT: "#C8B6E2",
          deep: "#A695C8",
        },
        mint: {
          soft: "#D7EBD9",
          DEFAULT: "#A8D4B0",
          deep: "#7DB888",
        },
        textbrown: {
          DEFAULT: "#5A4A40",
          muted: "#8A7A70",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto)", "system-ui", "sans-serif"],
        maru: ["var(--font-maru)", "var(--font-noto)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 20px -8px rgba(180, 140, 120, 0.25)",
        card: "0 10px 30px -12px rgba(180, 140, 120, 0.30)",
      },
      backgroundImage: {
        "pastel-grad":
          "linear-gradient(135deg, #FBD9DF 0%, #E8DEF5 50%, #D7EBD9 100%)",
        "cream-grad": "linear-gradient(180deg, #FDF7EE 0%, #F5EBDF 100%)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
