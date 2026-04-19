import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@gocheok/components/presenter/card/Card';
import { Skeleton } from '@gocheok/components/feedback/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton/Default',
  component: Skeleton,
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-2xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <Card className="space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton shape="circle" />
        <div className="flex-1 space-y-2">
          <Skeleton className="w-40" />
          <Skeleton className="w-24" />
        </div>
      </div>
      <Skeleton shape="rect" className="h-40" />
      <Skeleton />
      <Skeleton className="w-5/6" />
      <Skeleton className="w-2/3" />
    </Card>
  ),
};
