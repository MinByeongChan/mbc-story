import type { Meta, StoryObj } from '@storybook/react-vite';

import { Profile } from '@gocheok/components/presenter/profile/Profile';

type Story = StoryObj<typeof Profile>;

const meta: Meta<typeof Profile> = {
  title: 'Presenter/Profile/Default',
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
