/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "Plus Jakarta Sans", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      },
      colors: {
        // 90% dark theme with purple accents
        primary: "#07070e", // background base
        secondary: "#B6B8C9",
        tertiary: "rgba(255,255,255,0.04)", // glass overlay
        accent: "#8A4DFF",
        accent2: "#C084FC",
        accent3: "#5B5BD6",
        "text-light": "#E6E8F0",
        "black-100": "#0a0a12",
        "black-200": "#0b0b14",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 30px rgba(108,92,231,0.20)",
        panel: "0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
        soft: "0 10px 30px rgba(16,16,32,0.6)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // Gradient used under the grain overlay
        "hero-gradient": "radial-gradient(1200px 600px at 20% 0%, rgba(108,92,231,0.25) 0%, rgba(12,12,20,0) 60%), radial-gradient(1000px 600px at 100% 100%, rgba(192,132,252,0.25) 0%, rgba(12,12,20,0) 60%)",
        "panel-gradient": "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        "purple-radial": "radial-gradient(800px 400px at 50% 0%, rgba(115, 86, 255, 0.35) 0%, rgba(12,12,20,0) 60%)",
      },
      borderRadius: {
        glass: "18px",
        glassm: "14px",
        card: "24px",
        panel: "28px",
      },
    },
  },
  plugins: [],
};
