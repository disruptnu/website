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
          primary: "#000000",
          elevated: "#18181b", // zinc-900 equivalent
          border: "#3f3f46", // zinc-700 equivalent
        },
      },

      fontFamily: {
        faucet: ["Faucet", "sans-serif"],
        "usual-light": ["UsualLight", "sans-serif"],
        "usual-regular": ["UsualRegular", "sans-serif"],
      },

      screens: {
        mobile: "320px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },

      brightness: {
        25: ".25",
      },
    },
  },
  plugins: [],
};
