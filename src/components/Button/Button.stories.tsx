import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Primary: StoryObj = {
  name: "Primary",
  args: {
    children: "Button",
  },
};
