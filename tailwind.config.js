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
    extend: {
      colors: {
        "primary-dark-900": "#111111",
        "primary-dark-800": "#333333",
        "primary-text-700": "#999999",
        "primary-text-600": "#f1f1f1",
        "primary-text-500": "#b7b6c0",
        "primary-text-400": "#c9d1d9",
        "primary-orange": "#e56643",
      },
    },
  },
  plugins: [],
};
