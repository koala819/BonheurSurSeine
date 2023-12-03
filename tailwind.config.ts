const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-light": "#003366",
        "bg-dark": "#121212",
        "text-link": "#fbbf24",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
