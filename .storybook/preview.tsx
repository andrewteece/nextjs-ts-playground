import type { Decorator, Preview } from "@storybook/nextjs-vite";
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
  const theme = context.globals.theme as "light" | "dark";
  return (
    <div
      className={theme === "dark" ? "dark" : ""}
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        padding: "1.25rem",
      }}
    >
      <Story />
    </div>
  );
};

const withCanvasBounds: Decorator = (Story) => (
  <div className="mx-auto w-full max-w-[720px]">
    <Story />
  </div>
);

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
  decorators: [withTheme, withCanvasBounds],
};

export default preview;
