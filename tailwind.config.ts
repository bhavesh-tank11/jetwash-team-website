import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050D1A",
          900: "#0A1A33",
          800: "#0F2A52",
          700: "#153A6B",
        },
        electric: {
          400: "#5EC8F2",
          500: "#2F8FF5",
          600: "#2F6FED",
          700: "#1E4FD0",
        },
        ice: {
          50: "#F5F9FC",
          100: "#EAF2FA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "wash-gradient": "linear-gradient(135deg, #0A1A33 0%, #153A6B 55%, #2F6FED 100%)",
        "spray-radial": "radial-gradient(circle at 30% 20%, rgba(94,200,242,0.25), transparent 55%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(10,26,51,0.35)",
        glow: "0 0 40px rgba(47,143,245,0.35)",
      },
      keyframes: {
        wipe: {
          "0%": { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
          "100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        droplet: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(120px)", opacity: "0" },
        },
      },
      animation: {
        wipe: "wipe 1.2s cubic-bezier(0.65,0,0.35,1) forwards",
        float: "float 6s ease-in-out infinite",
        droplet: "droplet 2.4s ease-in infinite",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
