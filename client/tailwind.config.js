/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        overlayDark:
          'linear-gradient(180deg, rgba(36,52,168,0) 27%, rgba(0,0,0,0.6) 50%)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

