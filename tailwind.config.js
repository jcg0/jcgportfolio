/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: [],
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#ff6700",
          secondary: "#004e98",
          accent: "#3a6ea5",
          neutral: "#ebebeb",
        },
      },
    ],
  },
};
