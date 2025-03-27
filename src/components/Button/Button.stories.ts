import { Button } from '.';
import { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Light: Story = {
  args: {
    children: "Button",
  },
};

export const Dark: Story = {
  args: {
    children: "Button",
    theme: "dark",
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    isLoading: true,
  },
};
