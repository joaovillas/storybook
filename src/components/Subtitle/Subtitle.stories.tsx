import type { Meta, StoryObj } from "@storybook/react";
import Subtitle from ".";

export default {
  title: "Typography/Subtitle",
  component: Subtitle,
} as Meta;

export const Small: StoryObj = {
  name: "Default",
  args: {
    children: "Subtitle",
  },
};
