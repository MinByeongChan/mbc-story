import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '@gocheok/components/presenter/badge/Badge';
import { Flex } from '@gocheok/components/layout/flex/Flex';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex/Default',
  component: Flex,
  decorators: [
    (Story) => (
      <div className="max-w-3xl p-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <Flex justify="between" className="rounded-2xl border border-(--color-border) p-5">
      <div>
        <strong className="block text-sm">예매 현황</strong>
        <p className="mt-1 text-sm text-(--color-grey-600)">좌석 선택이 3건 남았습니다.</p>
      </div>
      <Badge variant="primary">진행 중</Badge>
    </Flex>
  ),
};

export const Wrapped: Story = {
  render: () => (
    <Flex gap="sm" wrap>
      <Badge>주말</Badge>
      <Badge variant="success">공연 확정</Badge>
      <Badge variant="warning">대기</Badge>
      <Badge variant="danger">마감 임박</Badge>
    </Flex>
  ),
};
