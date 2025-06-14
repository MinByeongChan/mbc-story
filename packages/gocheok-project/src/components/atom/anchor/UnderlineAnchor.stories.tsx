import type { Meta, StoryObj } from "@storybook/react-vite";

import { UnderlineAnchor } from "./UnderlineAnchor";

const meta: Meta<typeof UnderlineAnchor> = {
  title: "Atom/Anchor/UnderlineAnchor",
  component: UnderlineAnchor,
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
type Story = StoryObj<typeof UnderlineAnchor>;

export const StressAnchor: Story = {
  args: {
    children: "Underline Anchor",
  },
};

export const LongTextAnchor: Story = {
  args: {
    children:
      "Long Text Underline AnchorLong Text Underline AnchorLong Text Underline AnchorLong Text Underline AnchorLong Text Underline Anchor",
  },
};
