module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Ensure all your Next.js files are included
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',  // If using `pages/` folder for Next.js
    './styles/**/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
