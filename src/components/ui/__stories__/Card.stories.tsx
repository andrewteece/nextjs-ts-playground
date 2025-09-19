import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../Card";

const meta = {
  title: "UI/Card",
  component: Card,
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">
          Cards group related information. Add any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { className: "" },
};
