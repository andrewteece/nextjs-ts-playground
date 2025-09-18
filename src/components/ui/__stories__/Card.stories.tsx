import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "../Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardContent className="p-6">This is a simple card.</CardContent>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Put any content here.</p>
        <p className="text-sm text-muted-foreground">
          You can compose header/content as needed.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Playground: Story = {
  args: {},
  render: (args) => (
    <Card {...args} className="max-w-md">
      <CardHeader>
        <CardTitle>Playground</CardTitle>
      </CardHeader>
      <CardContent>Try tweaking args/controls.</CardContent>
    </Card>
  ),
};
