/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBackgroundPrimary: "#111827",
        darkBackgroundSecondary: "#1F2937",
      },
      screens: {
        xs: "350px",
      },
      typography: (theme) => ({
        DEFAULT: {
          "prose-xs": {
            css: {
              fontSize: "0.6rem",
            },
          },
          css: {
            maxWidth: "w-full",
            textAlign: "justify",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
