import { color } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000066",
        secondary: "rgb(0, 51, 153)",
        background: "#2121215e",
        background_2: "#22303c",
        nav_active:    "#2121215e",
        nav_toggle_color: "#fcfcfc",
        text_color: "#333333"
      },
    },
  },
  plugins: [],
}
//background: linear-gradient(to bottom, #000066, #003399);
//box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
//background: linear-gradient(to bottom, #345995, #e84855);


