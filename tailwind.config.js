/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "rgb(210, 188, 147)",
      },
      width: {
        "custom-width": "550px",
      },
      boxShadow: {
        custom:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
      keyframes: {
        // zoomIn: {
        //   "0%": { transform: "scale(1)" },
        //   "100%": { transform: "scale(1)" },
        // },
        forNav: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        forlinear: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-1500px)" },
        },
        leftToRight: {
          "0%": { right: "1000px" },
          "100%": { right: "0%", opacity: "1" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0.5" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        forCard: {
          "0%": { left: "-15px", opacity: "0.4" },
          "50%": { opacity: "0.5" },
          "100%": { left: "0", opacity: "1" },
        },
        // demo: {
        //   "0%": { opacity: "0.1" },
        //   "100%": { opacity: "1" },
        // },
      },

      animation: {
        // zoomIn: "zoomIn 2s 3.2s ease forwards",
        forNav: "forNav 1.5s 1.5s ease forwards",
        forlinear: "forlinear 2s 0.3s ease forwards",
        leftToRight: "leftToRight 2s ease 1s forwards",
        rightToLeft: "rightToLeft 2s ease 1s forwards",
        forCard: "forCard 0.5s ease forwards",
        // demo: "demo 1s 1s ease forwards",
      },

      // default breakpoints but with 40px removed
      screens: {
        sm: "540px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      variants: {
        display: ["group-hover"],
        extend: {
          backgroundColor: ["hover"],
          animation: ["group-hover"],
        },
      },
    },
  },
  plugins: [],
};
