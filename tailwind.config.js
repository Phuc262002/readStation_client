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
          "text-pending":"#FFFBE5",
          "bg-pending":"#FFD700",
          "text-confirm":"#E9F4FE",
          "bg-confirm":"#2196F3",
          "text-shipping":"#FFF8ED",
          "bg-shipping":"#FFB74D",
          "text-hiring":"#F5E9F7",
          "bg-hiring":"#9C27B0",
          "text-completed":"#E5F4F3",
          "bg-completed":"#009688",
          "text-uod":"#FEECEB",
          "bg-uod":"#F44336",
          "text-canceled":"#F5F5F5",
          "bg-canceled":"#9E9E9E",
          "text-draft":"#E5E5E5",
          "bg-draft":"#000000",
        },
      },
    },
  },
  plugins: [],
};
