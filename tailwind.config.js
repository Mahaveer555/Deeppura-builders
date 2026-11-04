/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Halka Green (Soft Light Green Background Palette)
        halkaGreen: {
          50: '#F5FAF6',
          100: '#EAF3EC', // Primary soft halka green background
          200: '#DFECE2', // Slightly deeper alternating halka green
          300: '#CCE2D2', // Subtle sage border
          400: '#A3CEAD',
          500: '#75AD8D',
          600: '#52796F',
        },
        // Royal Architectural Gold Palette
        gold: {
          50: '#FFFDF7',
          100: '#FEF7DA',
          200: '#FDE89A',
          300: '#FBD55B',
          400: '#F5BF26', // Radiant gold
          500: '#D4AF37', // True Royal Gold
          600: '#B8860B', // Rich Architectural Gold
          700: '#996515', // Deep Burnished Gold (Super readable on light green)
          800: '#7A500A',
          900: '#4D3204',
          950: '#2A1702',
        },
        // Amber alias mapped to Gold for complete compatibility
        amber: {
          50: '#FFFDF7',
          100: '#FEF7DA',
          200: '#FDE89A',
          300: '#FBD55B',
          400: '#F5BF26',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996515',
          800: '#7A500A',
          900: '#4D3204',
          950: '#2A1702',
        },
        // Deeppura Corporate Blue Palette (Matches official logo)
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7', // Official Deeppura logo cyan-blue
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
        emerald: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        brand: {
          dark: '#051912',
          darker: '#03100B',
          navy: '#08231A',
          card: '#0C2D22',
          gold: '#D4AF37',
          goldDark: '#B8860B',
          goldLight: '#F5BF26',
          goldIce: '#FEF7DA',
          blue: '#0284C7',
          blueDark: '#0369A1',
          halkaGreen: '#EAF3EC',
          halkaGreenAlt: '#DFECE2',
          borderHalkaGreen: '#CCE2D2',
          white: '#FFFFFF',
          slate: '#94A3B8',
          border: 'rgba(255, 255, 255, 0.1)',
          borderGold: 'rgba(212, 175, 55, 0.35)',
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
