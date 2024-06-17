/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      padding: {
        sidebar: "250px",
      },
      colors: {
        rtprimary: "#FF7D29",
        orange: {
          50: "#fff6ed",
          100: "#ffebd4",
          200: "#ffd2a8",
          300: "#ffb271",
          400: "#ff7d29",
          500: "#fe6411",
          600: "#ef4a07",
          700: "#c63408",
          800: "#9d2b0f",
          900: "#7e2610",
          950: "#440f06",
        },
        rtgray: {
          50: " #E5E7EB",
          100: "#808089",
        },
        rtyellow: {
          50: "#FEFFD2",
        },
        tag: {
          "bg-pending": "#FFFBE5",
          "text-pending": "#FFD700",
          "bg-confirm": "#E9F4FE",
          "text-confirm": "#2196F3",
          "bg-shipping": "#FFF8ED",
          "text-shipping": "#FFB74D",
          "bg-hiring": "#F5E9F7",
          "text-hiring": "#9C27B0",
          "bg-completed": "#E5F4F3",
          "text-completed": "#009688",
          "bg-uod": "#FEECEB",
          "text-uod": "#F44336",
          "bg-canceled": "#F5F5F5",
          "text-canceled": "#9E9E9E",
          "bg-draft": "#E5E5E5",
          "text-draft": "#000000",
        },
      },
    },
  },
  plugins: [],
};
