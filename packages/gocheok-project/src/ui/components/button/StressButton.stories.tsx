import type { Meta, StoryObj } from "@storybook/react-vite";

import { StressButton } from "./StressButton";

const meta: Meta<typeof StressButton> = {
  title: "UI/Button/StressButton",
  component: StressButton,
  decorators: [
    (Story) => (
      <div className="w-full h-[calc(100vh)] bg-(--color-bg-100)">
        <div className="p-8">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StressButton>;

export const Primary: Story = {
  args: {
    children: "Stress Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    className: "w-[10rem] border-none",
  },
};
