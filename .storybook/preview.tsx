import type { Decorator, Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

/** Centers canvas and constrains width on ultrawide screens */
const withCenteredFrame: Decorator = (Story) => (
  <div className="sb-wrapper">
    <div className="sb-frame sb-frame-card">
      <Story />
    </div>
  </div>
);

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
  },
  decorators: [withCenteredFrame],
};

export default preview;
