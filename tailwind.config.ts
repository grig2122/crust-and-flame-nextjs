import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fire-orange': '#FB923C',
        'deep-orange': '#EA580C',
        'charcoal': '#111827',
        'warm-gray': '#6B7280',
        'golden': '#F59E0B',
        'rustic-brown': '#92400E',
        'off-white': '#F9FAFB',
        'light-gray': '#F3F4F6'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'scale-in': 'scaleIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
export default config