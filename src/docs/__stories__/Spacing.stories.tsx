import type { Meta, StoryObj } from "@storybook/react";

// A simple placeholder component for the Spacing docs
const SpacingPlaceholder = () => <div>Spacing Documentation</div>;

const meta = {
  title: "Foundations/Spacing",
  component: SpacingPlaceholder,
  parameters: {
    docs: {
      page: null, // This prevents the auto-generated docs page for stories
    },
  },
} satisfies Meta<typeof SpacingPlaceholder>;

export default meta;
type Story = StoryObj<typeof SpacingPlaceholder>;

export const Default: Story = {
  parameters: {
    docs: { disable: true }, // Hide from docs
    controls: { disable: true }, // Hide controls
    options: { showPanel: false }, // Hide from sidebar
  },
  tags: ["!dev"], // Hide from sidebar completely
};
