import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-fg">
          This card uses your design tokens (light/dark) and soft shadow.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm">Primary</Button>
        <Button variant="outline" size="sm">
          Outline
        </Button>
      </CardFooter>
    </Card>
  ),
};
