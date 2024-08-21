/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Bebas Neue", "sans-serif"],
        secondary: ["Noto Sans", "sans-serif"],
      },
      colors: {
        "custom-blue": "#337596",
      },
      backgroundColor: {
        "custom-bg": "#FCFBFC",
      },
    },
  },
  plugins: [],
};
