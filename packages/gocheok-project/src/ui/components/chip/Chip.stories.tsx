import type { Meta, StoryObj } from "@storybook/react-vite";

import { Chip } from "./Chip";

type Story = StoryObj<typeof Chip>;

const meta: Meta<typeof Chip> = {
  title: "UI/Chip/Default",
  component: Chip,
  decorators: [
    (Story) => (
      <div className="w-full h-[calc(100vh)] bg-(--color-bg-100)">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: Story = {
  args: {
    children: "hello",
  },
};
