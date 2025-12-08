/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FDFBF7',      // Fondo crema
        'coffee': '#2C1810',     // Texto café oscuro
        'caoba': '#8D4E38',      // Tu color principal
        'sand': '#E6DCC3',       // Arena suave
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}