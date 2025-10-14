/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#012060', // School navy blue
        secondary: '#f46524', // School orange
        accent: {
          yellow: '#FDB71A', // Complementary yellow
          teal: '#0BA5A4', // Complementary teal
          light: '#E8F4F8', // Light blue background
        },
        navy: {
          50: '#e6eaf2',
          100: '#ccd5e5',
          200: '#99abd1',
          300: '#6681bc',
          400: '#3357a8',
          500: '#012060', // Main
          600: '#011a4d',
          700: '#01133a',
          800: '#000d26',
          900: '#000613',
        },
        orange: {
          50: '#fef2ec',
          100: '#fde5d9',
          200: '#fbcbb3',
          300: '#f9b18d',
          400: '#f79767',
          500: '#f46524', // Main
          600: '#c3511d',
          700: '#923d16',
          800: '#62280e',
          900: '#311407',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #012060 0%, #023a8a 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f46524 0%, #ff8c52 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(1,32,96,0.95) 0%, rgba(244,101,36,0.85) 100%)',
      },
    },
  },
  plugins: [],
}

