import type { Meta, StoryObj } from '@storybook/react-vite';

import { StressButton } from './StressButton';

const meta: Meta<typeof StressButton> = {
  title: 'Atom/Button/StressButton',
  component: StressButton,
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
type Story = StoryObj<typeof StressButton>;

export const Primary: Story = {
  args: {
    children: 'Stress Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    noneRadius: true,
  },
};
