import { ToggleButton } from '@components/ToggleButton';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Inputs/ToggleButton",
  component: ToggleButton,
} as Meta;

type Story = StoryObj<typeof ToggleButton>;

const defaultArgs = {
  options: [
    { label: "Option 1", onClick: action("Option 1 clicked") },
    { label: "Option 2", onClick: action("Option 2 clicked") },
  ],
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
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
