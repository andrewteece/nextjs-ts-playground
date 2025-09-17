// Import types from nextjs-vite rather than react
import type { Decorator, Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css"; // Import global styles

// Define a consistent padding decorator
const withPadding: Decorator = (Story) => (
  <div style={{ padding: "1rem" }}>
    <Story />
  </div>
);

// Clean preview configuration with proper typing
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    // Add some test-specific parameters
    test: {
      // Wait for component to render completely
      asyncRender: true,
    },
  },
  // Simple decorator to add consistent padding
  decorators: [withPadding],
};

export default preview;
