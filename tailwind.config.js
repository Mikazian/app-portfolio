/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC6559",
        secondary: "#545E77",
        background: "#111116",
        foreground: "#16171F",
        undeground: "#030104",
        onbackground: "#CBCBCB",
        border: "#202130",
        borderlight: "#AEC6E3",
        light: "#F5F5F5",
      }
    },
    fontFamily: {
      'title-black': ['NeuePlak-NarrowBlack'],
      'title-bold': ['NeuePlak-NarrowBold'],
      'text-bold': ['LaguSans-Bold'],
      'text-medium': ['LaguSans-Medium'],
    },
  },
  plugins: [],
}