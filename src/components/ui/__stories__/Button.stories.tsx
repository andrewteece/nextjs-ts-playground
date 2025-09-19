import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: { children: "Click me" },
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "select",
      options: ["default", "outline", "ghost", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const Icon: Story = {
  args: { size: "icon", children: "★", "aria-label": "Star" },
};
