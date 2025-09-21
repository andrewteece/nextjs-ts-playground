import type { Meta, StoryObj } from "@storybook/react";

// A simple placeholder component for the Overview docs
const OverviewPlaceholder = () => <div>Overview Documentation</div>;

const meta = {
  title: "Docs/Overview",
  component: OverviewPlaceholder,
  parameters: {
    docs: {
      page: null, // This prevents the auto-generated docs page for stories
    },
  },
} satisfies Meta<typeof OverviewPlaceholder>;

export default meta;
type Story = StoryObj<typeof OverviewPlaceholder>;

export const Default: Story = {
  parameters: {
    docs: { disable: true }, // Hide from docs
    controls: { disable: true }, // Hide controls
    options: { showPanel: false }, // Hide from sidebar
  },
  tags: ["!dev"], // Hide from sidebar completely
};
