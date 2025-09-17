import type { Meta } from "@storybook/nextjs-vite";
import React from "react";

// A simple component for testing
const SimpleTest: React.FC = () => {
  return <div>Simple Test Component</div>;
};

// Define the metadata for the story
const meta = {
  title: "Test/SimpleTest",
  component: SimpleTest,
  render: () => <SimpleTest />,
} satisfies Meta<typeof SimpleTest>;

export default meta;

// Import type for stories
import type { StoryObj } from "@storybook/nextjs-vite";
type Story = StoryObj<typeof meta>;

// The basic story for testing
export const Basic: Story = {
  args: {},
};
