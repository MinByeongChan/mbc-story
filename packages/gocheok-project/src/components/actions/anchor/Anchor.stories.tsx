import type { Meta, StoryObj } from '@storybook/react-vite';

import { Anchor } from '@gocheok/components/actions/anchor/Anchor';

const meta: Meta<typeof Anchor> = {
  title: 'Actions/Anchor/Spinning',
  component: Anchor,
  decorators: [
    (Story) => (
      <div className="h-[calc(100vh)] w-full bg-(--color-bg-100)">
        <div className="p-8">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const DefaultAnchor: Story = {
  args: {
    children: 'Default Anchor',
  },
};

export const LongTextAnchor: Story = {
  args: {
    children: 'Long Text AnchorLong Text AnchorLong Text AnchorLong Text AnchorLong Text Anchor',
  },
};

export const SmSizeAnchor: Story = {
  args: {
    children: 'SM Size Anchor',
    className: 'text-sm h-[1.0rem]',
  },
};

export const XlSizeAnchor: Story = {
  args: {
    children: 'XL Size Anchor',
    className: 'text-2xl h-[2rem]',
  },
};

export const OtherFontColorAnchor: Story = {
  args: {
    children: 'Other Font Color Anchor',
    className: 'text-red-400',
  },
};
