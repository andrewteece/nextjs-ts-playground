import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./.storybook/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      // IMPORTANT: use <alpha-value> so bg-*/opacity like bg-muted/80 works
      colors: {
        background: "hsl(var(--bg) / <alpha-value>)",
        foreground: "hsl(var(--fg) / <alpha-value>)",

        card: "hsl(var(--card) / <alpha-value>)",
        "card-fg": "hsl(var(--card-fg) / <alpha-value>)",

        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-fg": "hsl(var(--primary-fg) / <alpha-value>)",

        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",

        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-fg": "hsl(var(--muted-fg) / <alpha-value>)",

        // (Optional) keep your legacy keys if anything still references them
        bg: "hsl(var(--bg) / <alpha-value>)",
        text: "hsl(var(--fg) / <alpha-value>)",
      },

      borderRadius: {
        DEFAULT: "var(--radius-sm)",
        sm: "var(--radius-xs)",
        md: "var(--radius-md)",
        lg: "calc(var(--radius-md) + 2px)",
        xl: "1rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        // keeps your custom “soft” shadow so `shadow-soft` works
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        soft: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px -12px rgba(0,0,0,0.12)",
      },

      fontFamily: {
        sans: "var(--font-sans)",
      },

      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
      },

      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        6: "var(--space-6)",
      },

      animation: {
        "fade-in": "fade-in .25s ease-out both",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },

      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "hsl(var(--fg))",
            "--tw-prose-headings": "hsl(var(--fg))",
            "--tw-prose-links": "hsl(var(--primary))",
            "--tw-prose-bold": "hsl(var(--fg))",
            "--tw-prose-counters": "hsl(var(--muted-fg))",
            "--tw-prose-bullets": "hsl(var(--muted-fg))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--fg))",
            "--tw-prose-quote-borders": "hsl(var(--border))",
            "--tw-prose-captions": "hsl(var(--muted-fg))",
            "--tw-prose-code": "hsl(var(--fg))",
            "--tw-prose-th-borders": "hsl(var(--border))",
            "--tw-prose-td-borders": "hsl(var(--border))",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
