import { action } from '@storybook/addon-actions';
import { Pagination } from '@components/Pagination';
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Navigation/Pagination",
  component: Pagination,
} as Meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 7,
    onPageChange: (page: number) => action(`Page changed to ${page}`)(),
    length: 5,
    currentPage: 1
  },
};

