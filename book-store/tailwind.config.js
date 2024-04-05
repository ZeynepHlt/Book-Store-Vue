/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px'
      }
    },
    extend: {
      fontFamily: {
        Alata: ['Alata', 'sans-serif']
      },
      colors: {
        purple: '#170028',
        purple1: '#372942'
      },
      spacing: {
        128: '40rem',
        0.5: '0.10rem'
      }
    }
  },
  plugins: []
}
