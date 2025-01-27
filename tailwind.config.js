/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust the paths based on your project
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
