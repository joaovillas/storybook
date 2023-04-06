import type { Meta, StoryObj } from "@storybook/react";
import Heading from ".";

export default {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {
    as: {
      control: {
        type: "select",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Pick one of the heading types",
      defaultValue: "h2",
      name: "heading types",
    },
  },
  args: {
    as: "h1",
  },
} as Meta;

export const Small: StoryObj = {
  name: "Small",
  args: {
    as: "h1",
    children: "Heading",
  },
};
