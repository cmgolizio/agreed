/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        like: "#22CC00",
        dislike: "#B30000",
        back: "#FFC34D",
        nearBlack: "#16161D",
        ghostW: "#f8f8ff",
        lightG: "#d2d2d2",
      },
      boxShadow: {
        lightMode: "0px 0px 70px -20px rgba(144, 144, 255, 1)",
        darkMode: "0px 0px 70px -20px rgba(102, 102, 217, 1)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
