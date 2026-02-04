/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // اللون الأساسي
          // DEFAULT: "#2e3f66",   
          DEFAULT: "#291633",   
          // لون فاتح متناسق
          light: "#526192",     
        },
        text: {
          DEFAULT: "#D8D3BC",   // نص أساسي (يمكن تركه كما هو)
        },
      },
    },
  },
  plugins: [],
};
