// Use nextjs-vite types
import type { Decorator, Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

// --- Global toolbar: light/dark theme ---
export const globalTypes = {
  theme: {
    title: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      dynamicTitle: true,
    },
  },
};

// Padding decorator (yours)
const withPadding: Decorator = (Story) => (
  <div style={{ padding: "1rem" }}>
    <Story />
  </div>
);

// Dark-mode decorator: toggles the .dark class + design tokens background
const withTheme: Decorator = (Story, context) => {
  const isDark = context.globals.theme === "dark";
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-[60vh] bg-background text-foreground">
        <Story />
      </div>
    </div>
  );
};

// Clean preview configuration
const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Storybook test-runner parameters (kept from your example)
    test: {
      asyncRender: true,
    },
  },
  decorators: [withTheme, withPadding],
};

export default preview;
