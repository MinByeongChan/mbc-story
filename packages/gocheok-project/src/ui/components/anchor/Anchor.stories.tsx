import type { Meta, StoryObj } from "@storybook/react-vite";

import { Anchor } from "./Anchor";

const meta: Meta<typeof Anchor> = {
  title: "UI/Anchor/Default",
  component: Anchor,
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
type Story = StoryObj<typeof Anchor>;

export const StressAnchor: Story = {
  args: {
    children: "Stress Anchor",
  },
};

export const LongTextAnchor: Story = {
  args: {
    children:
      "Long Text AnchorLong Text AnchorLong Text AnchorLong Text AnchorLong Text Anchor",
  },
};
