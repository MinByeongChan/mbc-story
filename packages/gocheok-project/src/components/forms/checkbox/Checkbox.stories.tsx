import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@gocheok/components/forms/checkbox/Checkbox';
import { Label } from '@gocheok/components/forms/label/Label';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox/Default',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    'aria-label': '동의',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    'aria-label': '선택됨',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <Label className="inline-flex cursor-pointer items-center gap-2 select-none">
      <Checkbox {...args} />
      <span className="peer-disabled:text-(--color-muted-foreground)">약관에 동의합니다</span>
    </Label>
  ),
};

export const WithLabelDisabled: Story = {
  render: () => (
    <Label className="inline-flex cursor-not-allowed items-center gap-2 select-none">
      <Checkbox disabled />
      <span className="peer-disabled:text-(--color-muted-foreground)">약관에 동의합니다</span>
    </Label>
  ),
};

export const WithLabelDisabledChecked: Story = {
  render: () => (
    <Label className="inline-flex cursor-not-allowed items-center gap-2 select-none">
      <Checkbox defaultChecked disabled />
      <span className="peer-disabled:text-(--color-muted-foreground)">약관에 동의합니다</span>
    </Label>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': '비활성',
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    'aria-label': '비활성·선택됨',
  },
};
