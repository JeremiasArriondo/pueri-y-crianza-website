/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        violetPrimary: "#916DD5",
        violetSecondary: "#3E206D",
        bluePrimary: "#407088",
        blueSecondary: "#132743"
      },
      boxShadow: {
        pink: "0px 0px 30px -3px rgba(255, 181, 181, 1)"
      }
    }
  },
  plugins: []
};
