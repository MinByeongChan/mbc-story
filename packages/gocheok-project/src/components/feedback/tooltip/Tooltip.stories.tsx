import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@gocheok/components/actions/button/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@gocheok/components/feedback/tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip/Default',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div className="flex min-h-48 items-center justify-center p-6">
        <TooltipProvider delayDuration={120}>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="rounded-lg border border-(--color-border) bg-white px-4 py-2 text-sm text-(--color-foreground)">
          도움말 보기
        </Button>
      </TooltipTrigger>
      <TooltipContent>게시글 상태를 한눈에 확인할 수 있어요.</TooltipContent>
    </Tooltip>
  ),
};
