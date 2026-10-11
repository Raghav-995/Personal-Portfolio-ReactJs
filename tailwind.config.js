/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#090d16',
          50: '#1e2436',
          100: '#171c2b',
          200: '#131826',
          300: '#0f1420',
          card: '#0e1526',
          surface: '#121b30',
          border: 'rgba(56, 189, 248, 0.12)',
        },
        brand: {
          cyan: '#38bdf8',
          sky: '#0284c7',
          indigo: '#818cf8',
          violet: '#a855f7',
          emerald: '#34d399',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15), transparent 70%)',
        'card-glow': 'radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(56, 189, 248, 0.08), transparent 40%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'glow-indigo': '0 0 25px -5px rgba(129, 140, 248, 0.3)',
        'glow-subtle': '0 0 35px -10px rgba(56, 189, 248, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
