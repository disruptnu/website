/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      width: {
        120: "450px",
        130: "500px",
      },

      fontFamily: {
        Faucet: ["Faucet", "sans-serif"],
        UsualLight: ["UsualLight", "sans-serif"],
        UsualRegular: ["UsualRegular", "sans-serif"],
      },

      fontSize: {
        120: "120px",
        56: "56px",
        42: "42px",
        32: "32px",
        24: "24px",
        16: "16px",
        12: "12px",
      },

      lineHeight: {
        72: "72px",
        56: "56px",
        32: "32px",
        24: "24px",
        16: "16px",
      },

      colors: {
        navigationMenu: '#009AFF',
        transparent: "transparent",
        current: "currentColor",

        white: "#ffffff",

        primary: {
          500: "#13A9B2",
          400: "#42BAC1",
          300: "#71CBD1",
          200: "#A1DDE0",
          100: "#B8E5E8",
          50: "#E7F6F7",
        },

        neutral: {
          500: "#053437",
          400: "#375D5F",
          300: "#5E7A7B",
          200: "#9BAEAF",
          100: "#B4C2C3",
          50: "#E6EBEB",
        },

        accent: {
          500: "#FFD771",
          400: "#FFDF8D",
          300: "#FFE7AA",
          200: "#FFEFC6",
          100: "#FFF3D4",
          50: "#FFFBF1",
        },
      },

      screens: {
        mobile: "320px",

        tablet: "768px",

        laptop: "1024px",

        desktop: "1440px",

        desktopMax: "1920px",
      },

      brightness: {
        '25': '.25',
      },

      backgroundImage: {
        "hero-bg": "url('../src/img/hero-bg.svg')",
        "faq-bg": "url('../src/img/faq-bg.svg')",
        "contact-bg": "url('../src/img/contact-us.svg')",
        "features-bg": "url('../src/img/features-bg.svg')",
      },
    },
  },
  plugins: [],
}