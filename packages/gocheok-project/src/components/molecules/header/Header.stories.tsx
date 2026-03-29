import type { Meta, StoryObj } from '@storybook/react-vite';

import { Header } from './Header';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header/Default',
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
