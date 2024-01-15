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
        'dark-base': '#1A1A1E',
        'dark-grey': '#252531',
        'medium-grey': '#353543',
        'light-grey': '#4B4B61',
        
      },
      backgroundImage: {
        // 'home-1':"url('/images/background/home1.png')",
        'landing-1':"url('/images/bg-landing-page.svg')",
        'fluid-1' :"url('/images/bg-fluid-1.png')",
        'project-bg':"url('/public/images/background-project-page.png')",
      }
    },
  },
  plugins: [],
}
