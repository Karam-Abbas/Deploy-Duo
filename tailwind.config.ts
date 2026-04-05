import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        border: '#1F1F1F',
        text: '#EDEDED',
        muted: '#6B6B6B',
        accent: {
          DEFAULT: '#C8F135',
          dim: '#8FB520',
        },
        white: '#FFFFFF',
        // Keep shadcn compat
        background: '#0A0A0A',
        foreground: '#EDEDED',
        primary: {
          DEFAULT: '#C8F135',
          foreground: '#0A0A0A',
        },
        card1: '#111111',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
