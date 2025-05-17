/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
    "!../../packages/**/node_modules/**",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fx_zinc: {
          950: "var(--color-zinc-950)",
          900: "var(--color-zinc-900)",
          800: "var(--color-zinc-800)",
          700: "var(--color-zinc-700)",
          600: "var(--color-zinc-600)",
          500: "var(--color-zinc-500)",
          400: "var(--color-zinc-400)",
          300: "var(--color-zinc-300)",
          200: "var(--color-zinc-200)",
          100: "var(--color-zinc-100)",
          50: "var(--color-zinc-50)",
        },
        fx_indigo: {
          950: "var(--color-indigo-950)",
          900: "var(--color-indigo-900)",
          800: "var(--color-indigo-800)",
          700: "var(--color-indigo-700)",
          600: "var(--color-indigo-600)",
          500: "var(--color-indigo-500)",
          400: "var(--color-indigo-400)",
          300: "var(--color-indigo-300)",
          200: "var(--color-indigo-200)",
          100: "var(--color-indigo-100)",
          50: "var(--color-indigo-50)",
        },
        background: {
          indigo_primary: "var(--primary-color)",
          transparent: {
            indigo_1: "var(--indigo-transparent-1st)",
            indigo_2: "var(--indigo-transparent-2nd)",
          },
          color_950C: "var(--background)",
          color_925C: "var(--background-color-925C)",
          color_900C: "var(--background-color-900C)",
          color_800C: "var(--background-color-800C)",
          color_850C: "var(--background-color-850C)",
          color_750C: "var(--background-color-750C)",
          hover: {
            indigo_primary: "var(--primary-purple-hover-bg)",
          },
        },
        border: {
          color_1: "var(--border-color-1)",
          color_2: "var(--border-color-2)",
          primary_indigo: "var(--primary-color)",
        },
        text: {
          indigo: {
            color_1: "var(--primary-color)",
          },
          color_1: "var(--foreground)",
          color_2: "var(--foreground-color-2)",
          color_3: "var(--foreground-color-3)",
          color_4: "var(--foreground-color-4)",
          svg_default: "var(--svg-default-color)",
          color_default_white: "var(--color-zinc-50)",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      animation: {
        fadeLogoLoading: "fadeLogoLoading 2s infinite",
        scaleUp: "scaleUp 0.3s ease-out forwards",
        fadeUpWinPlaceHolder: "fadeUpWinPlaceHolder 0.3s ease-out forwards",
        fadeUp: "fadeUp 0.3s ease-out forwards",
        "spin-gradient": "rotate360 2s linear infinite",
      },
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeLogoLoading: {
          "0%, 100%": { opacity: "100%" },
          "50%": { opacity: "30%" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)", opacity: "0%" },
          "100%": { transform: "scale(1)", opacity: "100%" },
        },
        fadeUpWinPlaceHolder: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "20%" },
        },
        fadeUp: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      fontSize: {
        workspace_1: "15px",
        workspace_2: "14px",
        workspace_3: "13px",
        read_25: "25px",
        read_20: "20px",
        read_16: "16px",
      },
      borderRadius: {
        DEFAULT: "8px",
        tiny: "5px",
        circle: "50%",
        tablet: "50px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
