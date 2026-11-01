import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#05060d", 900: "#080a15", 800: "#0d1020", 700: "#141831" },
        aurora: { violet: "#8b5cf6", indigo: "#6366f1", blue: "#3b82f6", cyan: "#22d3ee" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%,-3%,0) scale(1.08)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(52,211,153,.55)" },
          "100%": { boxShadow: "0 0 0 10px rgba(52,211,153,0)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 26s ease-in-out infinite reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
