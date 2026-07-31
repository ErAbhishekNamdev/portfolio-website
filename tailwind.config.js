/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#030308',
          base: '#05050A',
          surface: '#111118',
          mid: '#1A1A24',
        },
        cyan: '#00D4FF',
        purple: '#9B59FF',
        pink: '#FF6EC7',
        success: '#00E5A0',
        warning: '#F5C842',
        lightBg: {
          base: '#F4F6FB',
          surface: '#FFFFFF',
          card: '#F8FAFC',
          muted: '#E2E8F0',
        },
        txt: {
          primary: '#FFFFFF',
          secondary: '#A0A0B0',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
      },
      maxWidth: {
        'container': '1200px',
      }
    },
  },
  plugins: [],
}
