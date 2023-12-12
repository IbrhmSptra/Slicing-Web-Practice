/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Popins", "sans-serif"],
      },
      colors: {
        "bg-blue": "#0500FF",
        "bg-yellow": "#F8FB76",
        "bg-green": "#4EFF75",
        "bg-cyan": "#00FFD1",
        "bg-white": `rgb(246, 250, 255)`,
        secondary: "#001AFF",
      },
      backgroundImage: ({ theme }) => ({
        bggradient: `linear-gradient(90deg,${theme("colors.bg-blue")},${theme(
          "colors.bg-yellow"
        )},${theme("colors.bg-green")},${theme("colors.bg-cyan")})`,
      }),
      opacity: {
        88: ".88",
      },
    },
  },
  plugins: [],
};
