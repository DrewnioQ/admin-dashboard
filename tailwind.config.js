/** @type {import('tailwindcss').Config} */

export default {
  content: ["./*.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "4xl": "2000px",
      },
      minHeight: {
        screen: "100svh",
      },
      fontFamily: {
        sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        lato: "Lato, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        poppins:
          "Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },
      boxShadow: {
        t: "0 -1px 3px 0 rgb(0 0 0 / 0.1)",
        r: "1px 0 3px 0 rgb(0 0 0 / 0.1)",
        l: "-1px 0 3px 0 rgb(0 0 0 / 0.1)",
        "t-sm": "0 -1px 2px 0 rgb(0 0 0 / 0.1)",
        "r-sm": "1px 0 2px 0 rgb(0 0 0 / 0.1)",
        "l-sm": "-1px 0 2px 0 rgb(0 0 0 / 0.1)",
        "t-md": "0 -4px 6px 1px rgb(0 0 0 / 0.1)",
        "r-md": "4px 0 6px 1px rgb(0 0 0 / 0.1)",
        "l-md": "-4px 0 6px 1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
}
