/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      DEFAULT: '0px 8px 16px 0px rgba(0,0,0,0.2)'
    },
    screens: {
       xxl: '1440px',
       xl : '1224px',
       lg : '976px',
       md : '768px',
       sm : '480px'
    },
    extend: {
      colors: {
        
      }
    },
  },
  plugins: [],
}


