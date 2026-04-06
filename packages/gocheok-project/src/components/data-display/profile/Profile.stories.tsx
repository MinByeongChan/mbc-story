import type { Meta, StoryObj } from '@storybook/react-vite';

import { Profile } from '@gocheok/components/data-display/profile/Profile';

type Story = StoryObj<typeof Profile>;

const meta: Meta<typeof Profile> = {
  title: 'Data Display/Profile/Default',
  component: Profile,
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
  args: {},
};
