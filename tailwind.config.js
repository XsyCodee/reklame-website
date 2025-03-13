/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#F2E2B1',
        'custom-taupe': '#BDB395',
        'custom-light': '#F6F0F0',
        'custom-beige-dark': '#D5C7A3',
      }
    },
  },
  plugins: [],
};