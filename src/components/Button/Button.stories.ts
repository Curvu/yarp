import { Button } from '.';
import { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    onClick: () => console.log("Button clicked"),
  },
};

