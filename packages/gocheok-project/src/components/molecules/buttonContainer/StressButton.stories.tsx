import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonContainer } from './ButtonContainer';

const meta: Meta<typeof ButtonContainer> = {
  title: 'Molecules/ButtonContainer/Default',
  component: ButtonContainer,
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
type Story = StoryObj<typeof ButtonContainer>;

export const Primary: Story = {
  args: {
    children: 'Button Container',
  },
};
