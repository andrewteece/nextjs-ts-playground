import type { Meta, StoryObj } from "@storybook/nextjs-vite";

// A super simple component with no dependencies
const MinimalButton = ({ label }: { label: string }) => (
  <button
    style={{
      padding: "10px 20px",
      background: "blue",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    {label}
  </button>
);

// Simple metadata
const meta = {
  title: "Minimal/Button",
  component: MinimalButton,
  parameters: {
    layout: "centered",
  },
  // Add a render function for the component
  render: (args) => <MinimalButton {...args} />,
} satisfies Meta<typeof MinimalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple story
export const Primary: Story = {
  args: {
    label: "Minimal Button",
  },
};
