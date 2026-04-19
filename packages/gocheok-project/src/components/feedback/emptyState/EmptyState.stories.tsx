import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@gocheok/components/actions/button/Button';
import { EmptyState } from '@gocheok/components/feedback/emptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/EmptyState/Default',
  component: EmptyState,
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-2xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const SearchResultEmpty: Story = {
  args: {
    title: '검색 결과가 없어요',
    description: '필터를 조금 넓히거나 다른 키워드로 다시 찾아보세요.',
    action: (
      <Button className="rounded-lg bg-(--color-primary) px-4 py-2 text-sm text-white">
        필터 초기화
      </Button>
    ),
  },
};

export const ListEmpty: Story = {
  args: {
    title: '아직 등록된 항목이 없습니다',
    description: '첫 번째 항목을 추가하면 이 영역에서 목록과 상태를 확인할 수 있습니다.',
    action: (
      <Button className="rounded-lg bg-(--color-secondary) px-4 py-2 text-sm text-(--color-foreground)">
        새 항목 만들기
      </Button>
    ),
  },
};
