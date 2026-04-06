import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '@gocheok/components/forms/label/Label';
import { Switch } from '@gocheok/components/forms/switch/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch/Default',
  component: Switch,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    'aria-label': '알림',
  },
};

export const On: Story = {
  args: {
    defaultChecked: true,
    'aria-label': '알림 켜짐',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': '비활성',
  },
};

export const DisabledOn: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    'aria-label': '비활성·켜짐',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <Label className="inline-flex cursor-pointer items-center gap-2 select-none">
      <Switch {...args} />
      <span className="text-sm text-(--color-foreground)">푸시 알림</span>
    </Label>
  ),
};
