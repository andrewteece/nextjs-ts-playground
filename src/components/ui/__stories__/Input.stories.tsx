import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "Type something…",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-[360px] items-center gap-2">
      <Input {...args} />
      <Button className="shrink-0">Submit</Button>
    </div>
  ),
  args: { placeholder: "Email address" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled input" },
};
