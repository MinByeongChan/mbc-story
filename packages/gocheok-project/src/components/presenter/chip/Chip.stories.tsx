import type { Meta, StoryObj } from '@storybook/react-vite';

import { Chip } from '@gocheok/components/presenter/chip/Chip';

type Story = StoryObj<typeof Chip>;

const meta: Meta<typeof Chip> = {
  title: 'Presenter/Chip/Default',
  component: Chip,
  decorators: [
    (Story) => (
      <div className="h-[calc(100vh)] w-full bg-(--color-bg-100)">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: Story = {
  args: {
    children: 'hello',
  },
};
