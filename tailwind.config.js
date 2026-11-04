/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Architectural Gold Palette (Primary Theme Accent)
        gold: {
          50: '#FCFAF5',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D', // Radiant Royal Gold
          600: '#A88246',
          700: '#8A6632', // Deep high-contrast readable gold
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1F0D',
        },
        // Amber mapped to Gold
        amber: {
          50: '#FCFAF5',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D',
          600: '#A88246',
          700: '#8A6632',
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1F0D',
        },
        // Emerald mapped to Gold (Removes green everywhere)
        emerald: {
          50: '#FCFAF5',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D',
          600: '#A88246',
          700: '#8A6632',
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1F0D',
        },
        // Green mapped to Gold (Removes green everywhere)
        green: {
          50: '#FCFAF5',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D',
          600: '#A88246',
          700: '#8A6632',
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1F0D',
        },
        // Soft Golden Cream Background Palette
        halkaGreen: {
          50: '#FCFAF5',
          100: '#FAF7F0', // Primary Golden Ivory background
          200: '#F5EEDB', // Soft Champagne Sand
          300: '#E8D8B3', // Warm Gold Border
          400: '#DCBF89',
          500: '#C5A46D',
          600: '#8A6632',
        },
        ivory: {
          50: '#FCFAF5',
          100: '#FAF7F0',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D',
        },
        forest: {
          50: '#FCFAF5',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D',
          600: '#8A6632',
          700: '#241D14', // Deep Warm Bronze Gold
          800: '#18140E',
          900: '#120F0A',
          950: '#0C0A07',
        },
        // Sky & Blue mapped to Image 2 Royal Gold (#8A6632)
        sky: {
          50: '#FCFAF5',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D',
          600: '#8A6632', // Image 2 Exact Royal Gold
          700: '#8A6632',
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1F0D',
        },
        blue: {
          50: '#FCFAF5',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#E8D8B3',
          400: '#DCBF89',
          500: '#C5A46D',
          600: '#8A6632', // Image 2 Exact Royal Gold
          700: '#8A6632',
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1F0D',
        },
        brand: {
          dark: '#120F0A',
          darker: '#0C0A07',
          navy: '#18140E',
          card: '#241D14',
          forest: '#18140E',
          ivory: '#FAF7F0',
          gold: '#C5A46D',
          goldDark: '#8A6632',
          goldLight: '#DCBF89',
          goldIce: '#FCFAF5',
          blue: '#8A6632',
          blueDark: '#6E4F23',
          halkaGreen: '#FAF7F0',
          halkaGreenAlt: '#F5EEDB',
          borderHalkaGreen: '#E8D8B3',
          white: '#FFFFFF',
          slate: '#94A3B8',
          border: 'rgba(197, 164, 109, 0.18)',
          borderGold: 'rgba(197, 164, 109, 0.4)',
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
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.12)',
        'luxury': '0 20px 40px -15px rgba(212, 175, 55, 0.3)',
        'floating': '0 10px 25px -3px rgba(2, 132, 199, 0.35)',
        'gold': '0 0 25px rgba(212, 175, 55, 0.45)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.7)',
        'blue': '0 0 25px rgba(2, 132, 199, 0.45)',
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
