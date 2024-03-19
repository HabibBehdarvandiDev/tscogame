import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color
        primary: {
          DEFAULT: "#E30613", 
          dark: "#C40511",
        },

        // Secondary Color
        secondary: {
          DEFAULT: "#F6AD55",
          dark: "#DD6B20", 
        },

        // Info Color
        info: {
          DEFAULT: "#4299E1", 
          dark: "#2B6CB0",
        },

        // Danger Color
        danger: {
          DEFAULT: "#EF4444",
          dark: "#B91C1C",
        },

        // Warning Color
        warning: {
          DEFAULT: "#FCD34D",
          dark: "#D97706",
        },

        // Success Color
        success: {
          DEFAULT: "#34D399",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
};
export default config;
