import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sidebar: "0px 12px 250px 0px #A3B5D433",
      },
      colors: {
        main: "#5A60F6",
        lightGray: "#EAEAEC",
        gray: "#606265",
        black: "#29292E",
        bgClr:"#F6F6F6",
        lightGreen:"#EBFEF4",
        green:"#3DDA67",
        red:"#FA2057"
      },
      keyframes:{
        pulse: {
         " 0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".8",
          }
        }
      },
      animation:{
        pulse: "pulse 1.1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
};
export default config;
