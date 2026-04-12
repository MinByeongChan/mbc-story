import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '@gocheok/components/forms/label/Label';
import { Select } from '@gocheok/components/forms/select/Select';
import { SelectItem } from './SelectItem';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select/Default',
  component: Select,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions = (
  <>
    <SelectItem value="a">옵션 A</SelectItem>
    <SelectItem value="b">옵션 B</SelectItem>
    <SelectItem value="c">옵션 C</SelectItem>
  </>
);

export const Default: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select value="a">{sampleOptions}</Select>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex max-w-xs flex-col gap-2">
      <Label htmlFor="story-select">카테고리</Label>
      <Select id="story-select" defaultValue="">
        {sampleOptions}
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select disabled defaultValue="a">
        {sampleOptions}
      </Select>
    </div>
  ),
};
