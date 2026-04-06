import type { Meta, StoryObj } from '@storybook/react-vite';

import { Header } from '@gocheok/components/navigation/header/Header';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header/Default',
  component: Header,
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
