/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#174D37',
          50: '#F0F6F2',
          100: '#DCECE3',
          200: '#BADAC8',
          300: '#8FBFA6',
          400: '#529675',
          500: '#2A7251',
          600: '#174D37',
          700: '#133F2E',
          800: '#103326',
          900: '#0C271D',
        },
        charcoal: {
          DEFAULT: '#17231E',
          50: '#F3F5F4',
          100: '#E2E6E4',
          200: '#C2CCC7',
          300: '#9DB0A7',
          400: '#647A70',
          500: '#3D4F46',
          600: '#27342E',
          700: '#17231E',
          800: '#101915',
          900: '#0A100E',
        },
        leaf: {
          DEFAULT: '#8EBF78',
          light: '#A7D493',
          dark: '#6EA356',
        },
        warm: {
          DEFAULT: '#F7F6F0',
          white: '#FDFCF9',
          beige: '#E8E1D2',
          kraft: '#D8C7B0',
          accent: '#C49767',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 2px 8px -2px rgba(23, 35, 30, 0.05), 0 1px 3px -1px rgba(23, 35, 30, 0.03)',
        'paper-lg': '0 12px 24px -6px rgba(23, 35, 30, 0.08), 0 4px 8px -2px rgba(23, 35, 30, 0.04)',
        'paper-xl': '0 20px 32px -8px rgba(23, 35, 30, 0.12), 0 8px 16px -4px rgba(23, 35, 30, 0.06)',
      }
    },
  },
  plugins: [],
}
