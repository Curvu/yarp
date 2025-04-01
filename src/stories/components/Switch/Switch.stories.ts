import { action } from '@storybook/addon-actions';
import { Switch } from '@components/Switch';
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof Switch>;

export const Main: Story = {
  args: {
    onChange: (checked: boolean) => action('onChange')(checked),
  },
};

export const DefaultValued: Story = {
  args: {
    ...Main.args,
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Main.args,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    ...Main.args,
    checked: true,
    disabled: true,
  },
};
