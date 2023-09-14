/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: ss1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      lg2: { max: "970px" },
      md1: { max: "817px" },
      md2: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "679px" },
      xsm: { max: "450px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
