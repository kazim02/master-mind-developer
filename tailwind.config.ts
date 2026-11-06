import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11142B",
        navy: "#171A3A",
        violet: "#7557E8",
        lavender: "#EEEAFE",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(28, 25, 70, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
