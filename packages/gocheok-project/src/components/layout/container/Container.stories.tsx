import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@gocheok/components/presenter/card/Card';
import { Container } from '@gocheok/components/layout/container/Container';
import { Stack } from '@gocheok/components/layout/stack/Stack';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container/Default',
  component: Container,
  decorators: [
    (Story) => (
      <div className="w-full bg-(--color-grey-50) py-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container size="md">
      <Card>
        <Stack gap="sm">
          <strong className="text-lg">콘텐츠 영역</strong>
          <p className="text-sm text-(--color-grey-600)">
            Container는 페이지 폭과 좌우 여백을 토큰 기준으로 맞출 때 사용합니다.
          </p>
        </Stack>
      </Card>
    </Container>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Container size="full" padding="lg">
      <Card tone="muted">
        <p className="text-sm text-(--color-grey-700)">
          전체 폭 레이아웃에서도 동일한 패딩 규칙을 유지합니다.
        </p>
      </Card>
    </Container>
  ),
};
