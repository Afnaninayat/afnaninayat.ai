/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F0E',
        card: '#121817',
        surface: '#1A211F',
        accent: {
          DEFAULT: '#B6FF00',
          hover: '#9BE600',
          muted: 'rgba(182, 255, 0, 0.15)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A7B0AD',
          muted: '#6F7975',
        },
        border: {
          DEFAULT: '#29312F',
          hover: '#3F4B48',
        },
        success: '#22C55E',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'accent-glow': '0 0 25px -5px rgba(182, 255, 0, 0.25)',
        'accent-glow-lg': '0 0 45px -5px rgba(182, 255, 0, 0.35)',
        'card-hover': '0 12px 35px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
