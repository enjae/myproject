/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inconsolata: ["Inconsolata", "monospace"],
        Poppins: ["Poppins","sans-serif"],
        Unbounded :['Unbounded', "cursive"],
      }
    },
  },
  plugins: [],
}

