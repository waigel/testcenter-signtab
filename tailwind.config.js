/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'site-image': "url('/public/images/background.png')",
      },
      colors: {
        brand: {
          500: '#1c1d22'
        },
        primary: {
          500: '#103178',
          600: '#242424'
        }
      }
    },
  },
  plugins: [],
}