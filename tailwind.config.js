/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // Natural: ['Natural', 'serif'],
      // poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        current: "currentColor",
        // 's-orange': '#E16A3D',
        
      },
      backgroundImage: {
        // 'home-1':"url('/images/background/home1.png')",
        'landing-1':"url('/images/bg-landing-page.svg')"
      }
    },
  },
  plugins: [],
}
