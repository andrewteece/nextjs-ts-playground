import type { Meta, StoryObj } from "@storybook/react";

// A simple placeholder component for the Typography docs
const TypographyPlaceholder = () => <div>Typography Documentation</div>;

const meta = {
  title: "Foundations/Typography",
  component: TypographyPlaceholder,
  parameters: {
    docs: {
      page: null, // This prevents the auto-generated docs page for stories
    },
  },
} satisfies Meta<typeof TypographyPlaceholder>;

export default meta;
type Story = StoryObj<typeof TypographyPlaceholder>;

export const Default: Story = {
  parameters: {
    docs: { disable: true }, // Hide from docs
    controls: { disable: true }, // Hide controls
    options: { showPanel: false }, // Hide from sidebar
  },
  tags: ["!dev"], // Hide from sidebar completely
};
