import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Type here…",
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "Hello",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const WithErrorStyle: Story = {
  name: "With error style (example)",
  args: {
    placeholder: "Invalid value",
    className: "border-red-500 focus-visible:ring-red-500",
  },
};
