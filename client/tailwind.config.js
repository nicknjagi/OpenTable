const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        overlayDark:
          'linear-gradient(180deg, rgba(36,52,168,0) 27%, rgba(0,0,0,0.6) 50%)',
      },
    },
  },
  plugins: [flowbite.plugin(),],
}

