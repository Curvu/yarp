import { Button } from '@components/Button';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  args: {
    onClick: fn(),
  },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
};
