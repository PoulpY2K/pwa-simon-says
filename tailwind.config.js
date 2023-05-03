/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /grid-(cols|rows)-([1-9]|1[0-2])/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

