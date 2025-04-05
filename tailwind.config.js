/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        primaryLight: "#080808",
        primaryDeactive: "#555555",
        secondary: "#ffffff",
        borderLight: "#1D1D1D",
        success: "#01754f",
        purple: "#C36DEE",
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
    plugins: [],
  }
}

