/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "blue-50": "#F4F7FD",
        "blue-350": "#667EEA",
        "green-200": "#81C042",
        "purple-400": "#5e0087",
        "orange-200": "#E3763A",
      },
    },
  },
  plugins: [],
};
