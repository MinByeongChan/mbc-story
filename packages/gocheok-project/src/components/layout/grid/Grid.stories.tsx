import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@gocheok/components/presenter/card/Card';
import { Grid } from '@gocheok/components/layout/grid/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid/Default',
  component: Grid,
  decorators: [
    (Story) => (
      <div className="max-w-5xl p-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid columns={3}>
      <Card padding="md">공연</Card>
      <Card padding="md">예매</Card>
      <Card padding="md">정산</Card>
    </Grid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={2} gap="lg">
      <Card>
        <strong className="text-base">A 구역</strong>
        <p className="mt-2 text-sm text-(--color-grey-600)">잔여 좌석 12석</p>
      </Card>
      <Card tone="muted">
        <strong className="text-base">B 구역</strong>
        <p className="mt-2 text-sm text-(--color-grey-600)">잔여 좌석 8석</p>
      </Card>
    </Grid>
  ),
};
