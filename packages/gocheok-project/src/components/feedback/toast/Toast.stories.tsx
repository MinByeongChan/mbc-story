import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@gocheok/components/actions/button/Button';
import { Toast, ToastAction } from '@gocheok/components/feedback/toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast/Default',
  component: Toast,
  decorators: [
    (Story) => (
      <div className="mx-auto flex min-h-72 w-full max-w-2xl items-start justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

function ToastExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <Button
        className="rounded-lg bg-(--color-primary) px-4 py-2 text-sm text-white"
        onClick={() => setOpen(true)}
      >
        토스트 다시 열기
      </Button>
      {open ? (
        <Toast
          floating={false}
          tone="success"
          title="게시가 완료되었습니다"
          description="방금 등록한 글이 메인 화면에 노출되기 시작했습니다."
          action={<ToastAction>자세히 보기</ToastAction>}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
}

export const Default: Story = {
  render: () => <ToastExample />,
};
