import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  args: { children: "Beta", variant: "soft", color: "neutral", size: "md" },
  argTypes: {
    variant: { control: "inline-radio", options: ["solid", "soft", "outline"] },
    color: {
      control: "inline-radio",
      options: ["neutral", "primary", "success", "warning", "danger"],
    },
    size: { control: "inline-radio", options: ["sm", "md"] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};

export const Solid: Story = { args: { variant: "solid", color: "primary" } };
export const Outline: Story = {
  args: { variant: "outline", color: "primary" },
};

export const Success: Story = { args: { color: "success" } };
export const Warning: Story = { args: { color: "warning" } };
export const Danger: Story = { args: { color: "danger" } };

export const Small: Story = { args: { size: "sm" } };

export const Palette: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="solid" color="neutral">
        neutral
      </Badge>
      <Badge variant="soft" color="neutral">
        neutral
      </Badge>
      <Badge variant="outline" color="neutral">
        neutral
      </Badge>
      <Badge variant="solid" color="primary">
        primary
      </Badge>
      <Badge variant="soft" color="primary">
        primary
      </Badge>
      <Badge variant="outline" color="primary">
        primary
      </Badge>
      <Badge variant="solid" color="success">
        success
      </Badge>
      <Badge variant="soft" color="success">
        success
      </Badge>
      <Badge variant="outline" color="success">
        success
      </Badge>
      <Badge variant="solid" color="warning">
        warning
      </Badge>
      <Badge variant="soft" color="warning">
        warning
      </Badge>
      <Badge variant="outline" color="warning">
        warning
      </Badge>
      <Badge variant="solid" color="danger">
        danger
      </Badge>
      <Badge variant="soft" color="danger">
        danger
      </Badge>
      <Badge variant="outline" color="danger">
        danger
      </Badge>
    </div>
  ),
};
