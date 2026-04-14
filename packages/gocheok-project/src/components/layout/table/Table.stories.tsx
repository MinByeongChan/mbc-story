import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@gocheok/components/layout/table';

const meta: Meta<typeof Table> = {
  title: 'Layout/Table/Default',
  component: Table,
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-6 text-(--color-foreground)">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>최근 주문 목록</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>주문번호</TableHead>
          <TableHead>상품</TableHead>
          <TableHead align="right">금액</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">#1024</TableCell>
          <TableCell>티켓 A</TableCell>
          <TableCell align="right" className="tabular-nums">
            ₩45,000
          </TableCell>
          <TableCell>결제완료</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#1025</TableCell>
          <TableCell>티켓 B</TableCell>
          <TableCell align="right" className="tabular-nums">
            ₩32,000
          </TableCell>
          <TableCell>배송중</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>합계</TableCell>
          <TableCell align="right" className="tabular-nums">
            ₩77,000
          </TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Dense: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="h-9 py-2">항목</TableHead>
          <TableHead className="h-9 py-2">값</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-2">구역</TableCell>
          <TableCell className="py-2">A구역</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2">좌석</TableCell>
          <TableCell className="py-2">12열 8번</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
