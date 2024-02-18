/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        text: "#e4e6f7",
        background: "#03040c",
        primary: "#afb1c4",
        secondary: "#614749",
      },
    },
  },
  plugins: [],
};
