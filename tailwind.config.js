/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        orange: "#ea580c",
        dark: "#0f172a",
        pucat: "#64748b",
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
};

