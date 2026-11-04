/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Architectural Royal Gold palette (tuned to Mukundra Prime building elevation)
        amber: {
          50: '#FFFDF7',
          100: '#FEF7DA',
          200: '#FDE89A',
          300: '#FBD55B',
          400: '#F5BF26',
          500: '#D4AF37', // True Royal Gold (Hex #D4AF37)
          600: '#B8860B', // Rich Architectural Gold
          700: '#966B08', // Deep Bronze Gold
          800: '#785307', // Burnished Antique Gold
          900: '#4D3404',
          950: '#261902',
        },
        gold: {
          50: '#FFFDF7',
          100: '#FEF7DA',
          200: '#FDE89A',
          300: '#FBD55B',
          400: '#F5BF26',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#966B08',
          800: '#785307',
          900: '#4D3404',
          950: '#261902',
        },
        brand: {
          dark: '#070D18',
          darker: '#040810',
          navy: '#0B1322',
          card: '#0D1726',
          gold: '#D4AF37',
          goldDark: '#B8860B',
          goldLight: '#F5BF26',
          goldIce: '#FEF7DA',
          amber: '#D4AF37',
          amberDark: '#B8860B',
          amberLight: '#F5BF26',
          white: '#FFFFFF',
          slate: '#94A3B8',
          border: 'rgba(255, 255, 255, 0.1)',
          borderGold: 'rgba(212, 175, 55, 0.35)',
          borderAmber: 'rgba(212, 175, 55, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.3)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'luxury': '0 20px 40px -15px rgba(212, 175, 55, 0.3)',
        'floating': '0 10px 25px -3px rgba(212, 175, 55, 0.45)',
        'gold': '0 0 25px rgba(212, 175, 55, 0.45)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.7)',
        'amber': '0 0 25px rgba(212, 175, 55, 0.45)',
        'amber-lg': '0 0 40px rgba(212, 175, 55, 0.7)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
