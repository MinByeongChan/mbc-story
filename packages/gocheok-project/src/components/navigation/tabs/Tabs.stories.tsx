import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@gocheok/components/navigation/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs/Default',
  component: Tabs,
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-2xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">개요</TabsTrigger>
        <TabsTrigger value="schedule">일정</TabsTrigger>
        <TabsTrigger value="members">참여자</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm leading-6 text-(--color-muted-foreground)">
          프로젝트의 전체 상태와 최근 업데이트를 확인할 수 있습니다.
        </p>
      </TabsContent>
      <TabsContent value="schedule">
        <p className="text-sm leading-6 text-(--color-muted-foreground)">
          주간 단위 일정과 마감일을 탭 전환으로 빠르게 비교할 수 있습니다.
        </p>
      </TabsContent>
      <TabsContent value="members">
        <p className="text-sm leading-6 text-(--color-muted-foreground)">
          담당자, 리뷰어, 옵저버를 구분해 보여주는 정보 영역입니다.
        </p>
      </TabsContent>
    </Tabs>
  ),
};
