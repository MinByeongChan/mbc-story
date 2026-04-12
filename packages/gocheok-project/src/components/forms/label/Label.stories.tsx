import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@gocheok/components/forms/checkbox/Checkbox';
import { Input } from '@gocheok/components/forms/input/Input';
import { Label } from '@gocheok/components/forms/label/Label';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label/Default',
  component: Label,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: '필드 제목',
    htmlFor: 'story-label-default',
  },
  render: (args) => (
    <div className="flex max-w-sm flex-col gap-2">
      <Label {...args} />
      <Input id={args.htmlFor} placeholder="값을 입력하세요" />
    </div>
  ),
};

const labelWithCheckboxClassName =
  'inline-flex cursor-pointer items-center gap-2 text-(--color-foreground) select-none has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-(--color-muted-foreground)';

export const WithCheckbox: Story = {
  render: (args) => (
    <Label {...args} className={labelWithCheckboxClassName}>
      <Checkbox />
      <span>약관에 동의합니다</span>
    </Label>
  ),
};

export const WithCheckboxDisabled: Story = {
  render: (args) => (
    <Label {...args} className={labelWithCheckboxClassName}>
      <Checkbox disabled />
      <span>약관에 동의합니다</span>
    </Label>
  ),
};
