/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  extend: {
    animation: {
      marquee: "marquee 30s linear infinite",
      marquee2: "marquee2 30s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
  },

  theme: {
    extend: {
      colors: {
        canvasblue: "#0057C1",
        canvasgreen: "#2CB66D",
        canvaslightgrey: "#F6F6F6",
      },

      fontFamily: {
        robo: ["var(--font-roboto)"],
        national: ["var(--font-nation)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-img.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
