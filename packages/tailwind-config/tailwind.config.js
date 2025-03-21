/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
    "!../../packages/**/node_modules/**"
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
