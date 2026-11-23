/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#fbf7ee',
          200: '#f5eedb',
          300: '#eddcb8',
        },
        forest: {
          800: '#1b4d3e',
          900: '#0c3821',
          950: '#072415',
        },
        royalGold: {
          400: '#e6c86e',
          500: '#d4af37',
          600: '#c59b27',
          700: '#aa7c11',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
