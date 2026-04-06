import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '@gocheok/components/presenter/typography/Typography';

type Story = StoryObj<typeof Typography>;

const meta: Meta<typeof Typography> = {
  title: 'Presenter/Typography/Primary',
  component: Typography,
  decorators: [
    (Story) => (
      <div className="h-[calc(100vh)] w-full bg-(--color-bg-100)">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: Story = {
  args: {
    children: 'Typography',
  },
};
