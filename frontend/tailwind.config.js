/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        emerald: {
          400: '#fcd34d', // Swapping emerald to gold in some components temporarily to avoid breaking changes if emerald is hardcoded
          500: '#f59e0b',
          600: '#d97706',
        },
        gold: {
          400: '#fcd34d',
          500: '#fbbf24',
          600: '#f59e0b',
        },
        surface: {
          900: '#0b0616',
          800: '#140c26',
          700: '#1e113a',
          600: '#2b1a52',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':   'linear-gradient(135deg, #0b0616 0%, #140c26 40%, #1e113a 100%)',
        'card-gradient':   'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(245,158,11,0.08) 100%)',
        'gold-gradient':   'linear-gradient(135deg, #fbbf24, #f59e0b)',
        'brand-gradient':  'linear-gradient(135deg, #7c3aed, #fbbf24)',
        'danger-gradient': 'linear-gradient(135deg, #ef4444, #dc2626)',
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
        'slide-left':   'slideLeft 0.8s ease forwards',
        'slide-right':  'slideRight 0.8s ease forwards',
        'pulse-slow':   'pulse 3s ease-in-out infinite',
        'float':        'float 4s ease-in-out infinite',
        'glow':         'glow 2s ease-in-out infinite alternate',
        'shimmer':      'shimmer 2.5s linear infinite',
        'spin-slow':    'spin 8s linear infinite',
        'ping-slow':    'ping 2s cubic-bezier(0,0,0.2,1) infinite',
        'bounce-slow':  'bounce 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(139,92,246,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139,92,246,0.7), 0 0 80px rgba(245,158,11,0.3)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'brand':  '0 0 30px rgba(139,92,246,0.4)',
        'emerald':'0 0 30px rgba(245,158,11,0.4)',
        'gold':   '0 0 30px rgba(245,158,11,0.4)',
        'card':   '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(139,92,246,0.2)',
      },
    },
  },
  plugins: [],
}
