import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typography } from "./Typography";

type Story = StoryObj<typeof Typography>;

const meta: Meta<typeof Typography> = {
  title: "Atom/Typography/Primary",
  component: Typography,
  decorators: [
    (Story) => (
      <div className="w-full h-[calc(100vh)] bg-(--color-bg-100)">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: Story = {
  args: {
    children: "Typography",
  },
};
