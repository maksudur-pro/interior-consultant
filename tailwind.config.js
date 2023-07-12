/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Crimson: ["Crimson Pro", "sans-serif"],
      }, //end of fontFamily
    },
  },
  plugins: [require("daisyui")],
};
