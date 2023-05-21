/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'black-gradient':
          'linear-gradient(144.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)',
        'discount-gradient':
          'linear-gradient(125.17deg, #272727 0%, #11101d 100%)',
        'text-gradient':
          'radial-gradient(64.18% 64.18% at 71.16% 35.69%,#def9fa 0.89%,#bef3f5 17.23%,#9dedf0 42.04%,#7de7eb 55.12%,#5ce1e6 71.54%,#33bbcf 100%)',
      },
      animation: {
        sidebar: 'slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
    },
    screens: {
      md: { max: '850px' },
      sm: { max: '450px' },
      nav: '851px',
      lg: { max: '1000px', min: '850px' },
    },
  },
  plugins: [],
};
