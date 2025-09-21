// .storybook/preview.tsx
import type { Decorator, Preview } from "@storybook/react";
import { useEffect } from "react";
import "../src/app/globals.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme",
    defaultValue: "dark",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as "light" | "dark") ?? "dark";
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    return () => {
      root.classList.remove("dark");
      root.removeAttribute("data-theme");
    };
  }, [theme]);

  return (
    <div
      style={{
        background: "var(--bg, transparent)",
        minHeight: "100vh",
        padding: "1.25rem",
      }}
    >
      <Story />
    </div>
  );
};

const withCanvasBounds: Decorator = (Story, ctx) =>
  ctx.viewMode === "docs" ? (
    <Story />
  ) : (
    <div className="mx-auto w-full max-w-[720px]">
      <Story />
    </div>
  );

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    // ✅ No external types needed
    options: {
      storySort: {
        order: [
          "Docs",
          ["Overview", "*"], // Overview first in Docs section
          "Foundations",
          ["Colors", "Tokens", "*"], // Specific order for Foundations
          "UI",
          ["Button", "Card", "Input", "Badge", "*"], // Common components first
          "Development",
          "Testing",
        ],
        method: "alphabetical",
      },
    },
    docs: { canvas: { sourceState: "shown" } },
  },
  decorators: [withTheme, withCanvasBounds],
};

export default preview;
