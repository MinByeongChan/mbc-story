import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@gocheok/components/actions/button/Button';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from '@gocheok/components/navigation/menu';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu/Default',
  component: Menu,
  decorators: [
    (Story) => (
      <div className="flex min-h-80 items-center justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button className="rounded-lg border border-(--color-border) bg-white px-4 py-2 text-sm text-(--color-foreground)">
          더보기
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>게시글 액션</MenuLabel>
        <MenuItem>수정하기</MenuItem>
        <MenuItem>미리보기</MenuItem>
        <MenuSeparator />
        <MenuItem className="text-(--color-red-600)">삭제하기</MenuItem>
      </MenuContent>
    </Menu>
  ),
};
