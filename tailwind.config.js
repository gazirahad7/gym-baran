/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: 'transparent',
      current: 'currentColor',
      'white': '#e5e5e5',
      'btn-color': '#264373',
      'primary-color':' #6765f0',
    

    extend: {},
  },
}
