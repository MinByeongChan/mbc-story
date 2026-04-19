import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@gocheok/components/presenter/card/Card';
import { Stack } from '@gocheok/components/layout/stack/Stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack/Default',
  component: Stack,
  decorators: [
    (Story) => (
      <div className="max-w-md p-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Stack>
      <Card padding="md">첫 번째 블록</Card>
      <Card padding="md">두 번째 블록</Card>
      <Card padding="md">세 번째 블록</Card>
    </Stack>
  ),
};

export const Centered: Story = {
  render: () => (
    <Stack align="center" gap="lg">
      <Card className="w-full max-w-xs" padding="md">
        중앙 정렬
      </Card>
      <Card className="w-full max-w-xs" padding="md" tone="muted">
        간격 토큰
      </Card>
    </Stack>
  ),
};
