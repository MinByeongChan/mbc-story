import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '@gocheok/components/presenter/badge/Badge';
import { Card } from '@gocheok/components/presenter/card/Card';
import { Flex } from '@gocheok/components/layout/flex/Flex';
import { Stack } from '@gocheok/components/layout/stack/Stack';

const meta: Meta<typeof Card> = {
  title: 'Presenter/Card/Default',
  component: Card,
  decorators: [
    (Story) => (
      <div className="max-w-lg p-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Stack gap="sm">
        <Flex justify="between">
          <strong className="text-lg">프로필 요약</strong>
          <Badge variant="primary">활성</Badge>
        </Flex>
        <p className="text-sm text-(--color-grey-600)">
          카드 컴포넌트는 요약 블록, 리스트 아이템, 프로필 패널에 공통으로 사용할 수 있습니다.
        </p>
      </Stack>
    </Card>
  ),
};

export const Inverse: Story = {
  render: () => (
    <Card tone="inverse">
      <Stack gap="xs">
        <strong className="text-lg">다크 섹션</strong>
        <p className="text-sm text-(--color-neutral-200)">
          강조 영역이나 히어로 블록에 사용할 수 있습니다.
        </p>
      </Stack>
    </Card>
  ),
};
