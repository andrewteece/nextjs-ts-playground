// src/components/ui/__stories__/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Click me" }, // default props
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive" },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};
