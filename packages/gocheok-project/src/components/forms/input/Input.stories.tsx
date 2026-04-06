import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '@gocheok/components/forms/input/Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input/Default',
  component: Input,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '이름을 입력하세요',
    type: 'text',
    'aria-label': '이름',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'gocheok-project',
    type: 'text',
    'aria-label': '프로젝트 이름',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성',
    disabled: true,
    'aria-label': '비활성 입력',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호',
    autoComplete: 'current-password',
    'aria-label': '비밀번호',
  },
};
