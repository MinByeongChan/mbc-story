import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button/Default",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "DETAILS",
    className:
      "rounded-lg bg-(--color-primary) py-2 px-4 text-sm text-(--color-neutral-100)",
  },
};

export const PrimaryHover: Story = {
  args: {
    children: "DETAILS",
    className:
      "rounded-lg border border-neutral-200 bg-(--color-primary) py-2 px-4 text-sm text-(--color-neutral-100) hover:text-(--color-accent-200)",
  },
};

export const secondary: Story = {
  args: {
    children: "DETAILS",
    className:
      "rounded-lg bg-(--color-secondary) py-2 px-4 text-sm text-(--color-neutral-100)",
  },
};

export const chipButton: Story = {
  args: {
    children: "Chip Button",
    className:
      "rounded-full bg-(--color-bg-200) py-2 px-4 text-xs text-(--color-neutral-200) hover:bg-(--color-primary)",
  },
};
