import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '@gocheok/components/forms/label/Label';
import { Radio } from '@gocheok/components/forms/radio/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Forms/Radio/Default',
  component: Radio,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: 'radio-story',
    'aria-label': '옵션',
  },
};

export const Group: Story = {
  render: () => (
    <fieldset className="flex flex-col gap-3 border-0 p-0">
      <legend className="mb-1 text-sm font-medium text-(--color-foreground)">알림 수신</legend>
      <Label className="inline-flex cursor-pointer items-center gap-2">
        <Radio name="notify" value="all" defaultChecked />
        <span className="text-sm text-(--color-foreground)">전체</span>
      </Label>
      <Label className="inline-flex cursor-pointer items-center gap-2">
        <Radio name="notify" value="important" />
        <span className="text-sm text-(--color-foreground)">중요만</span>
      </Label>
      <Label className="inline-flex cursor-pointer items-center gap-2">
        <Radio name="notify" value="none" />
        <span className="text-sm text-(--color-foreground)">받지 않음</span>
      </Label>
    </fieldset>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': '비활성',
  },
};
