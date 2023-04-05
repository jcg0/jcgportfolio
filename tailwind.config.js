/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sweet-solution": "url('../assets/sweet-solution.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
