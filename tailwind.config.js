/** @type {import('tailwindcss').Config} */

export default {
  content: ["./*.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        screen: "100svh",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
        lato: "Lato, sans-serif",
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
}
