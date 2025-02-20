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
        modal : "rgba(0 , 0 , 0 ,0.2)",

        link : "rgba(100 , 100 , 200 , 1 )",
        warn : "rgba(200 , 100 ,100 , 1)",

        black: "rgba(35, 35, 35)",
        black_l: "rgba(60, 60, 60)",
        black_ll: "rgba(80, 80, 80)",
        black_d: "rgba(25, 25, 25)",

      },
    },
  },
  plugins: [],
} satisfies Config;
