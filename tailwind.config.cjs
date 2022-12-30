/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // ...
        primary: {
          50: "#f2f8ff",
          100: "#e6f1ff",
          200: "#c8e0ff",
          300: "#a9ceff",
          400: "#7db8ff",
          500: "#4fa2ff",
          600: "#268bff",
          700: "#0074e6",
          800: "#005db2",
          900: "#00457f",
        },
      },
      fontSize: {
        "2xs": ["0.5rem", "0.75rem"],
        "3xs": ["0.375rem", "0.5rem"],
      },
    },
  },
  plugins: [require("./lib/si-tw-plugin.cjs")],
};
