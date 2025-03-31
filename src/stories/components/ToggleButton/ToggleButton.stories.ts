import { ToggleButton } from '@/components/ToggleButton';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} as Meta;

type Story = StoryObj<typeof ToggleButton>;

const defaultArgs = {
  options: [
    { label: "Option 1", onClick: action("Option 1 clicked") },
    { label: "Option 2", onClick: action("Option 2 clicked") },
  ],
};

export const Light: Story = {
  args: {
    ...defaultArgs,
    theme: "light",
  },
};

export const Dark: Story = {
  args: {
    ...defaultArgs,
    theme: "dark",
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const MultipleOptions: Story = {
  args: {
    options: [
      ...defaultArgs.options,
      { label: "Option 3", onClick: action("Option 3 clicked") },
      { label: "Option 4", onClick: action("Option 4 clicked") },
    ],
    theme: "light",
  },
};
