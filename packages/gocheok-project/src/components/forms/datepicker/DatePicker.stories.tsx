import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatePicker } from '@gocheok/components/forms/datepicker/DatePicker';
import type { DatePickerValue } from '@gocheok/components/forms/datepicker/types';
import { Label } from '@gocheok/components/forms/label/Label';

const meta: Meta<typeof DatePicker> = {
  title: 'Forms/DatePicker/Default',
  component: DatePicker,
  decorators: [
    (Story) => (
      <div className="max-w-full p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const today = new Date();
const addDays = (date: Date, count: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + count);

const ControlledExample = () => {
  const [value, setValue] = useState<DatePickerValue>(today);

  return (
    <div className="flex max-w-xs flex-col gap-3">
      <DatePicker value={value} onChange={setValue} />
      <p className="text-sm text-(--color-grey-600)">
        선택값: {value == null ? '없음' : value.toLocaleDateString('ko-KR')}
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <div className="max-w-xs">
      <DatePicker defaultValue={today} placeholder="YYYY-MM-DD" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex max-w-xs flex-col gap-2">
      <Label htmlFor="story-datepicker">생년월일</Label>
      <DatePicker id="story-datepicker" name="birthday" placeholder="YYYY-MM-DD" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => <ControlledExample />,
};

export const Disabled: Story = {
  render: () => (
    <div className="max-w-xs">
      <DatePicker disabled defaultValue={today} />
    </div>
  ),
};

export const MinMax: Story = {
  render: () => (
    <div className="max-w-xs">
      <DatePicker defaultValue={today} maxDate={addDays(today, 30)} minDate={addDays(today, -30)} />
    </div>
  ),
};

export const Locale_KO: Story = {
  render: () => (
    <div className="max-w-xs">
      <DatePicker defaultValue={today} locale="ko" />
    </div>
  ),
};

export const Locale_EN: Story = {
  render: () => (
    <div className="max-w-xs">
      <DatePicker defaultValue={today} locale="en" />
    </div>
  ),
};

export const IsDateDisabled: Story = {
  render: () => (
    <div className="max-w-xs">
      <DatePicker
        defaultValue={today}
        isDateDisabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    </div>
  ),
};

export const CustomMonthIcons: Story = {
  render: () => (
    <div className="max-w-xs">
      <DatePicker
        defaultValue={today}
        nextMonthIcon={<span aria-hidden="true">→</span>}
        previousMonthIcon={<span aria-hidden="true">←</span>}
      />
    </div>
  ),
};
