/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#b5f727",
          blue: "#009AFF",
        },
        surface: {
          primary: "#151515",
          elevated: "#1e1e1e",
          border: "#2e2e2e",
          light: "#f8f8f8",
          white: "#ffffff",
        },
        text: {
          primary: "#151515",
          secondary: "#4a4a4a",
          muted: "#6b6b6b",
        },
      },

      fontFamily: {
        display: ['"DM Sans"', "sans-serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },

      screens: {
        mobile: "320px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },

      borderRadius: {
        hero: "1.5rem",
        card: "0.75rem",
        image: "1rem",
      },

      brightness: {
        25: ".25",
      },

      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },

      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-right": "scroll-right 35s linear infinite",
      },
    },
  },
  plugins: [],
};
