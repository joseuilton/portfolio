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
        primary: {
          300: "#7FC9FF",
          500: "#0094FF",
          700: "#004A7F"
        },
        secondary: {
          300: "#4FFF90",
          500: "#32E875",
          700: "#0EC250"
        },
        success: {
          300: "#B1E995",
          500: "#74D643",
          700: "#479122"
        },
        danger: {
          300: "#ED7878",
          500: "#DE2121",
          700: "#831515"
        }
      }
    },
  },
  plugins: [],
};
export default config;
