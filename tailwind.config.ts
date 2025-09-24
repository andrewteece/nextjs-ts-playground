// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--fg))",
        card: "hsl(var(--card))",
        "card-fg": "hsl(var(--card-fg))",
        muted: "hsl(var(--muted))",
        "muted-fg": "hsl(var(--muted-fg))",
        primary: "hsl(var(--primary))",
        "primary-fg": "hsl(var(--primary-fg))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* soft semantic pairs used by badges */
        "success-soft-bg": "hsl(var(--success-soft-bg))",
        "success-soft-fg": "hsl(var(--success-soft-fg))",
        "info-soft-bg": "hsl(var(--info-soft-bg))",
        "info-soft-fg": "hsl(var(--info-soft-fg))",
        "warn-soft-bg": "hsl(var(--warn-soft-bg))",
        "warn-soft-fg": "hsl(var(--warn-soft-fg))",
        "danger-soft-bg": "hsl(var(--danger-soft-bg))",
        "danger-soft-fg": "hsl(var(--danger-soft-fg))",
      },
      borderRadius: {
        xl: "var(--radius-md)",
        lg: "var(--radius-sm)",
        md: "var(--radius-xs)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
    },
  },
  plugins: [],
} satisfies Config;
