/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `./index.html`, 
    `./src/**/*.{vue,js,ts,jsx,tsx}`,
    `./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}`
  ],
  theme: {
    extend: {
      animation: {
        'success-glow': `success-glow 1s ease-in-out`,
      },
      keyframes: {
        'success-glow': {
          '0%': { 
            boxShadow: `0 0 0 0 rgba(6, 182, 212, 0)`,
            transform: `scale(1)`
          },
          '50%': { 
            boxShadow: `8px 8px 8px 8px rgba(6, 182, 212, 0.7)`,
            transform: `scale(1.01)`
          },
          '100%': { 
            boxShadow: `0 0 0 0 rgba(6, 182, 212, 0)`,
            transform: `scale(1)`
          }
        }
      }
    },
  },
  plugins: [require(`tailwindcss-primeui`)],
  corePlugins: {
    preflight: false,
  },
}