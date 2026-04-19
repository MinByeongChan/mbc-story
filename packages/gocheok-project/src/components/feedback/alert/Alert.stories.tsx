import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from '@gocheok/components/feedback/alert';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert/Default',
  component: Alert,
  decorators: [
    (Story) => (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    tone: 'info',
    title: '저장된 초안이 있습니다',
    description: '이전 작업이 자동 저장되어 이어서 편집할 수 있습니다.',
  },
};

export const Error: Story = {
  args: {
    tone: 'error',
    title: '요청 처리에 실패했습니다',
    description: '잠시 후 다시 시도하거나 네트워크 상태를 확인해 주세요.',
  },
};
