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
        signup: "0px 12px 64px 0px #A3B5D433",
        footerImg: "0px 36px 250px 0px #A3B5D466",
        card: "0px 36px 250px 0px #A3B5D466",
      },
      colors: {
        main: "#5A60F6",
        lightGray: "#EAEAEC",
        gray: "#606265",
        black: "#29292E",
        bgClr: "#F6F6F6",
        lightGreen: "#EBFEF4",
        green: "#3DDA67",
        red: "#FA2057",
      },
      fontFamily: {
        sfarabicregular: ["SF Arabic Regular"],
      },
      backgroundImage: {
        Footerbg: "linear-gradient(87.59deg, #FFFFFF 20.47%, #F0F8F8 49.46%, #CFE9E7 72.94%, #D7D4EE 99.93%)",
        Sec2bg: "linear-gradient(254.29deg, #F8F9FF 0.01%, #FFFFFF 102.15%)",
        Sec3bg: "linear-gradient(214.94deg, #FFFFFF 0.49%, #F0F8F8 42.84%, #CFE9E7 61.7%, #D7D4EE 92.4%)",
      },
    },
  },
  plugins: [],
};
export default config;
