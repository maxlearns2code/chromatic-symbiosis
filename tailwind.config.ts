import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        impact: ["Impact", "Haettenschweiler", "'Arial Narrow Bold'", "sans-serif"],
      },
      aspectRatio: {
        poster: "1043 / 1477",
      },
      keyframes: {
        vortex: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.4)" },
        },
        mistDrift: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-4%)" },
          "100%": { transform: "translateX(0%)" },
        },
        floatLeaf: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
      },
      animation: {
        vortex: "vortex 24s linear infinite",
        "vortex-fast": "vortex 8s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "mist-drift": "mistDrift 20s ease-in-out infinite",
        "float-leaf": "floatLeaf 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
