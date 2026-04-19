import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from '@gocheok/components/presenter/avatar/Avatar';
import { Flex } from '@gocheok/components/layout/flex/Flex';

const meta: Meta<typeof Avatar> = {
  title: 'Presenter/Avatar/Default',
  component: Avatar,
  decorators: [
    (Story) => (
      <div className="p-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Fallback: Story = {
  render: () => (
    <Flex gap="md">
      <Avatar name="Min Byeongchan" />
      <Avatar name="MBC Story" size="lg" />
      <Avatar name="Guest" size="xl" shape="square" />
    </Flex>
  ),
};

export const WithImage: Story = {
  args: {
    name: 'Storybook',
    alt: 'Storybook avatar',
    src: 'https://placehold.co/160x160/e8f3ff/2272eb?text=SB',
    size: 'xl',
  },
};
