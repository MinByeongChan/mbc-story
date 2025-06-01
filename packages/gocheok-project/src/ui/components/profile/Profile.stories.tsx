import type { Meta, StoryObj } from "@storybook/react-vite";

import { Profile } from "./Profile";

type Story = StoryObj<typeof Profile>;

const meta: Meta<typeof Profile> = {
  title: "UI/Profile/Default",
  component: Profile,
  decorators: [
    (Story) => (
      <div className="w-full h-[calc(100vh)] bg-(--color-bg-100)">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: Story = {
  args: {},
};
