/ @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#264ff9",
        "blue-bg": "#264FF9",
        "blue-txt":"#264ff9",
        "selected": "#ff45c9",
      },
      fontSize: {
        xs: "9px",
      },
      
    },
  },
  plugins: [],
};