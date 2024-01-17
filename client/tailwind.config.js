/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backPrimary_color: "#1f2937",    // black white
        backsecondary_color: "#f8fafc",  // White
        backteritiary_color: "#e5e7eb",  // gray
        text_color1: "#ffffff",
        text_color2: "#6b7280",
        text_color3: "#374151",
      },

      keyframes: {
        slideRight: {
          from: {
            transform: `translateX(-200px)`,
            opacity: 0,
          },

          to: {
            transform: `translateX(0px)`,
            opacity: 1,
          },
        },
        slideLeft: {
          from: {
            transform: `translateX(200px)`,
            opacity: 0,
          },

          to: {
            transform: `translateX(0px)`,
            opacity: 1,
          },
        },
        slideUp: {
          from: {
            transform: `translateY(100px)`,
            opacity: 0,
          },

          to: {
            transform: `translateY(0px)`,
            opacity: 1,
          },
        },
        bounceUpDown: {
          to: {
            transform: `translateY(-10px)`,
            opacity: 1,
          },
        },
      },

      animation: {
        slideRight: `slideRight 2s ease forwards`,
        slideLeft: `slideLeft 1.5s ease forwards`,
        slideUp: `slideUp 1.5s ease forwards`,
        bounceUpDown: `bounceUpDown 1s infinite ease-in-out alternate`,
      },
    },
  },
  plugins: [],
};