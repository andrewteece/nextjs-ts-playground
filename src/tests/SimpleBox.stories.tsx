import type { Meta, StoryObj } from "@storybook/nextjs-vite";

// A very minimal component with no external dependencies
const SimpleBox = ({ text = "Hello, Storybook!" }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ margin: 0 }}>{text}</h2>
    </div>
  );
};

const meta = {
  title: "Debug/SimpleBox",
  component: SimpleBox,
  parameters: {
    // Disable any potentially problematic addons
    docs: { disable: true },
    a11y: { disable: true },
    backgrounds: { disable: true },
    viewport: { disable: true },
    // Any other addon that could be causing issues
  },
  // Add render function to fix testing issues
  render: (args) => <SimpleBox {...args} />,
} satisfies Meta<typeof SimpleBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
