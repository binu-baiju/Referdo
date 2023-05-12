/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "CircularStd-Black"],
      },

      colors: {
        "custom-yellow": "#BAA333",
      },
    },
  },
  plugins: [],
};
