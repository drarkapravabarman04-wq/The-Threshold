/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          900: '#0a0e17',
          800: '#121820',
          700: '#1a2332',
          600: '#243045',
          500: '#2d3e57',
        },
        midnight: {
          900: '#0d1b2a',
          800: '#1b263b',
          700: '#263d5a',
          600: '#415a77',
          500: '#5a7a9e',
        },
        neon: {
          blue: '#00d9ff',
          cyan: '#00fff5',
          smoke: '#7dd3fc',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        reading: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
