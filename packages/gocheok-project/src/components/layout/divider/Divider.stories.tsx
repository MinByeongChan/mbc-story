import type { Meta, StoryObj } from '@storybook/react-vite';

import { Divider } from '@gocheok/components/layout/divider/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider/Default',
  component: Divider,
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const BetweenContent: Story = {
  render: () => (
    <div className="space-y-0 text-(--color-foreground)">
      <p className="text-sm">위쪽 영역</p>
      <Divider />
      <p className="text-sm">아래쪽 영역</p>
    </div>
  ),
};
