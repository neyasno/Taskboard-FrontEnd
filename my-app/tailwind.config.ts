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
        modal : "rgba(0 , 0 , 0 ,0.2)",
        link : "rgba(100 , 100 , 200 , 1 )",
        warn : "rgba(200 , 100 ,100 , 1)",
        header: "rgba(35, 35, 35)"
      },
    },
  },
  plugins: [],
} satisfies Config;
