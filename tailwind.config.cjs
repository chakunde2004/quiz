/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#fce7f3", // Pink
        panel: "#fee2e2", // Red
        accent: "#fef3c7", // Yellow
        deepteal: "#c20c3fff", // Orange
        softblue: "#530e9cff", // Light complementary color
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(6,50,80,0.06)",
      },
      borderRadius: {
        xl2: "28px",
      }
    },
  },
  plugins: [],
};
