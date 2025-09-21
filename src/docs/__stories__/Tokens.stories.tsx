import type { Meta, StoryObj } from "@storybook/react";

// A simple placeholder component for the Tokens docs
const TokensPlaceholder = () => <div>Design Tokens Documentation</div>;

const meta = {
  title: "Foundations/Tokens",
  component: TokensPlaceholder,
  parameters: {
    docs: {
      page: null, // This prevents the auto-generated docs page for stories
    },
  },
} satisfies Meta<typeof TokensPlaceholder>;

export default meta;
type Story = StoryObj<typeof TokensPlaceholder>;

export const Default: Story = {
  parameters: {
    docs: { disable: true }, // Hide from docs
    controls: { disable: true }, // Hide controls
    options: { showPanel: false }, // Hide from sidebar
  },
  tags: ["!dev"], // Hide from sidebar completely
};
