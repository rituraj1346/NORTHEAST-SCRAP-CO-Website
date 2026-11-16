/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F7F9FA',
        slate: {
          900: '#1a1f36',
          800: '#2d3555',
          700: '#3d4666',
        },
        accent: {
          orange: '#F97316',
          green: '#16A34A',
        },
      },
    },
  },
  plugins: [],
};
