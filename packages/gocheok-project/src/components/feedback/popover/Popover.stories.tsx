import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@gocheok/components/actions/button/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@gocheok/components/feedback/popover';

const meta: Meta<typeof Popover> = {
  title: 'Feedback/Popover/Default',
  component: Popover,
  decorators: [
    (Story) => (
      <div className="flex min-h-80 items-center justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-lg border border-(--color-border) bg-white px-4 py-2 text-sm text-(--color-foreground)">
          빠른 정보
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-3">
        <div>
          <p className="text-sm font-semibold text-(--color-foreground)">오늘의 발행 현황</p>
          <p className="mt-1 text-sm text-(--color-muted-foreground)">
            예약 발행 3건, 검수 대기 1건
          </p>
        </div>
        <div className="rounded-xl bg-(--color-muted) p-3 text-sm text-(--color-foreground)">
          오후 6시 전에 검수를 완료하면 오늘 안에 노출됩니다.
        </div>
      </PopoverContent>
    </Popover>
  ),
};
