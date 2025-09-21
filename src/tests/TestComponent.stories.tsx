import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const TestComponent = () => {
  return (
    <div data-testid="test-component">
      <h1>Test Component</h1>
      <p>This is a simple test component to debug Storybook loading issues</p>
    </div>
  );
};

const meta = {
  title: "Development/TestComponent",
  component: TestComponent,
  render: () => <TestComponent />,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
