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
      boxShadow: {
        primary:
          "0 4px 6px -1px rgba(227, 6, 19, 0.1), 0 2px 4px -1px rgba(227, 6, 19, 0.06)",
        secondary:
          "0 4px 6px -1px rgba(246, 173, 85, 0.1), 0 2px 4px -1px rgba(246, 173, 85, 0.06)",
        info: "0 4px 6px -1px rgba(66, 153, 225, 0.1), 0 2px 4px -1px rgba(66, 153, 225, 0.06)",
        danger:
          "0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)",
        warning:
          "0 4px 6px -1px rgba(252, 211, 77, 0.1), 0 2px 4px -1px rgba(252, 211, 77, 0.06)",
        success:
          "0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06)",
        salmon:
          "0 4px 6px -1px rgba(255, 107, 107, 0.1), 0 2px 4px -1px rgba(255, 107, 107, 0.06)",
        yellowOrange:
          "0 4px 6px -1px rgba(245, 158, 11, 0.1), 0 2px 4px -1px rgba(245, 158, 11, 0.06)",
        turquoise:
          "0 4px 6px -1px rgba(110, 231, 183, 0.1), 0 2px 4px -1px rgba(110, 231, 183, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
