import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from '@gocheok/components/forms/textarea/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea/Default',
  component: Textarea,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: '내용을 입력하세요',
    rows: 4,
    'aria-label': '본문',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'gocheok-project\n여러 줄 텍스트',
    rows: 4,
    'aria-label': '프로젝트 설명',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성',
    disabled: true,
    rows: 4,
    'aria-label': '비활성 입력',
  },
};
