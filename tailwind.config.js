/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 10s ease-in-out infinite',
      }
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1244px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1245px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
  },
  plugins: [],
}