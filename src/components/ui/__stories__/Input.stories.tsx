import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "../Input";

const meta = {
  title: "UI/Input",
  component: Input,
  args: { placeholder: "Type here…" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="space-y-2">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <div className="text-sm text-neutral-700">Value: {value}</div>
      </div>
    );
  },
};
