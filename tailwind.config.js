/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Crimson: ["Crimson Pro", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
      },
      boxShadow: {
        bottomShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.10)",
      }, //end of fontFamily
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#000000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
