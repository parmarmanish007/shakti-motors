/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garage: {
          dark: '#111827',     // Charcoal / Deep Navy
          darker: '#0B0F19',
          card: '#1F2937',
          blue: '#2563EB',     // Automotive Blue
          'blue-dark': '#1D4ED8',
          'blue-light': '#3B82F6',
          orange: '#F97316',   // High-impact accent
          'orange-hover': '#EA580C',
          bg: '#F8FAFC',       // Clean background
          border: '#E2E8F0',
          muted: '#64748B',
          success: '#16A34A',
          warning: '#F59E0B',
          danger: '#DC2626',
        }
      },
      fontFamily: {
        gujarati: ['"Noto Sans Gujarati"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', '"Noto Sans Gujarati"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(17, 24, 39, 0.06), 0 2px 6px -1px rgba(17, 24, 39, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(37, 99, 235, 0.12), 0 4px 12px -2px rgba(17, 24, 39, 0.06)',
        'glow-orange': '0 4px 20px rgba(249, 115, 22, 0.35)',
        'glow-blue': '0 4px 20px rgba(37, 99, 235, 0.3)',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
