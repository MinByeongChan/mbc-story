import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@gocheok/components/presenter/card/Card';
import { Spinner } from '@gocheok/components/feedback/spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner/Default',
  component: Spinner,
  decorators: [
    (Story) => (
      <div className="flex min-h-64 items-center justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    label: '데이터를 불러오는 중입니다.',
  },
};

export const PageLoading: Story = {
  render: () => (
    <Card className="flex w-full max-w-md flex-col items-center gap-4 py-12">
      <Spinner size="lg" label="콘텐츠를 준비하고 있습니다." />
      <p className="text-sm text-(--color-muted-foreground)">
        네트워크 상태에 따라 최대 몇 초 정도 걸릴 수 있습니다.
      </p>
    </Card>
  ),
};
