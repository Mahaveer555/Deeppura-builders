/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Swatch 1: Warm Ivory / Alabaster Background
        ivory: {
          50: '#FAF9F6',
          100: '#F8F7F2', // Exact Swatch 1 Hex
          200: '#EFECE4', // Soft alternating sand ivory
          300: '#E2DCBE', // Subtle warm border
          400: '#D5CDB0',
          500: '#B8AD8B',
        },
        // Swatch 2: Deep Regal Forest Pine Green
        forest: {
          50: '#EDF3F1',
          100: '#D8E5E1',
          200: '#B2CCC3',
          300: '#81AFA0',
          400: '#4B8574',
          500: '#2B6356',
          600: '#1F4E44',
          700: '#173D35', // Exact Swatch 2 Hex
          800: '#112E28',
          900: '#0B1E1A',
          950: '#061210',
        },
        // Swatch 3: Warm Royal Camel Gold
        camelGold: {
          50: '#FAF6EE',
          100: '#F4ECDA',
          200: '#E8D8B3',
          300: '#DCBF89',
          400: '#D1AC69',
          500: '#C5A46D', // Exact Swatch 3 Hex
          600: '#A88246',
          700: '#8A6632', // Deep high-contrast readable gold
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1702',
        },
        // Backward-compatible mappings:
        halkaGreen: {
          50: '#FAF9F6',
          100: '#F8F7F2', // Mapped to Swatch 1
          200: '#EFECE4',
          300: '#E2DCBE',
          400: '#D5CDB0',
          500: '#173D35', // Mapped to Swatch 2
          600: '#112E28',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F4ECDA',
          200: '#E8D8B3',
          300: '#DCBF89',
          400: '#D1AC69',
          500: '#C5A46D', // Mapped to Swatch 3
          600: '#A88246',
          700: '#8A6632',
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1702',
        },
        amber: {
          50: '#FAF6EE',
          100: '#F4ECDA',
          200: '#E8D8B3',
          300: '#DCBF89',
          400: '#D1AC69',
          500: '#C5A46D', // Mapped to Swatch 3
          600: '#A88246',
          700: '#8A6632',
          800: '#6E4F23',
          900: '#4C3414',
          950: '#2A1702',
        },
        emerald: {
          50: '#EDF3F1',
          100: '#D8E5E1',
          200: '#B2CCC3',
          300: '#81AFA0',
          400: '#4B8574',
          500: '#2B6356',
          600: '#1F4E44',
          700: '#173D35', // Mapped to Swatch 2
          800: '#112E28',
          900: '#0B1E1A',
          950: '#061210',
        },
        // Deeppura Corporate Sky Blue (Logo Cyan)
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
        brand: {
          dark: '#0B1E1A',
          darker: '#061210',
          navy: '#173D35',
          card: '#1F4E44',
          forest: '#173D35',
          ivory: '#F8F7F2',
          gold: '#C5A46D',
          goldDark: '#8A6632',
          goldLight: '#DCBF89',
          goldIce: '#FAF6EE',
          blue: '#0284C7',
          blueDark: '#0369A1',
          halkaGreen: '#F8F7F2',
          halkaGreenAlt: '#EFECE4',
          borderHalkaGreen: '#E2DCBE',
          white: '#FFFFFF',
          slate: '#94A3B8',
          border: 'rgba(23, 61, 53, 0.12)',
          borderGold: 'rgba(197, 164, 109, 0.35)',
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
