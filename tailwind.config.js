/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          logo:"#ED6530",
          faded:"#FEF4E0",
          card:"#F5F5F5"
        }
      }
    },
  },
  plugins: [
    
  ],
}