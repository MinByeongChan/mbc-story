import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '@gocheok/components/presenter/badge/Badge';
import { Flex } from '@gocheok/components/layout/flex/Flex';

const meta: Meta<typeof Badge> = {
  title: 'Presenter/Badge/Default',
  component: Badge,
  decorators: [
    (Story) => (
      <div className="p-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Variants: Story = {
  render: () => (
    <Flex gap="sm" wrap>
      <Badge>기본</Badge>
      <Badge variant="primary">정보</Badge>
      <Badge variant="success">정상</Badge>
      <Badge variant="warning">대기</Badge>
      <Badge variant="danger">오류</Badge>
    </Flex>
  ),
};

export const Small: Story = {
  args: {
    children: 'SMALL',
    size: 'sm',
    variant: 'primary',
  },
};
