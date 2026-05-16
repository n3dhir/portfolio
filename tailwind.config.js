/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        background: "hsl(222 47% 7%)",
        foreground: "hsl(210 40% 98%)",
        primary: "hsl(212 100% 60%)",
        muted: "hsl(215 20% 65%)",
        card: "hsl(222 47% 10%)",
        border: "hsl(217 24% 20%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
      },
    },
  },
  plugins: [],
}
