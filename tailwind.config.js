/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07111F',
          darker: '#00111D',
          navy: '#0B1728',
          card: '#0D1B2A',
          cyan: '#00D2EF',
          cyanLight: '#38BDF8',
          cyanIce: '#A2F4FD',
          white: '#FFFFFF',
          slate: '#94A3B8',
          border: 'rgba(255, 255, 255, 0.1)',
          borderCyan: 'rgba(0, 210, 239, 0.3)',
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
        'luxury': '0 20px 40px -15px rgba(0, 210, 239, 0.25)',
        'floating': '0 10px 25px -3px rgba(0, 210, 239, 0.4)',
        'cyan': '0 0 25px rgba(0, 210, 239, 0.4)',
        'cyan-lg': '0 0 40px rgba(0, 210, 239, 0.65)',
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
