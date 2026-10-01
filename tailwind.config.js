/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B11',
        surface: {
          DEFAULT: '#0F1626',
          elevated: '#141D32',
          card: '#0C1220',
          hover: '#18243E',
        },
        cyan: {
          accent: '#00E5FF',
          hover: '#38BDF8',
          glow: 'rgba(0, 229, 255, 0.25)',
        },
        violet: {
          accent: '#8B5CF6',
          hover: '#A855F7',
          glow: 'rgba(139, 92, 246, 0.25)',
        },
        emerald: {
          accent: '#10B981',
          hover: '#34D399',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#64748B',
          dark: '#94A3B8',
        },
        border: {
          DEFAULT: '#1E293B',
          light: '#28354D',
          hover: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -4px rgba(0, 229, 255, 0.35)',
        'cyan-glow-lg': '0 0 50px -5px rgba(0, 229, 255, 0.45)',
        'violet-glow': '0 0 25px -4px rgba(139, 92, 246, 0.35)',
        'dual-glow': '0 0 35px -5px rgba(0, 229, 255, 0.2), 0 0 35px -5px rgba(139, 92, 246, 0.2)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'wave': 'waveform 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        waveform: {
          '0%': { height: '20%' },
          '100%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
}
