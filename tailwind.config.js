/ @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-celeste": "#829FD9",
        "purple-primary": "#264ff9",
        "blue-bg": "#264FF9",
        "bg-verde": "#86BE0F",
        "bg-rojo": "#F92626",
        "blue-txt":"#264ff9",
        "selected": "#ff45c9",    
        "blue-color-opacity": "#d9dbf7",
      },
      fontSize: {
        xs: "9px",
      },
      
    },
  },
  plugins: [],
};