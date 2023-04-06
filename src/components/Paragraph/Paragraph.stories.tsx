import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from ".";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, erat non posuere sagittis, metus velit pellentesque sem, nec efficitur ligula ligula non augue. Ut interdum quis nulla eu cursus. Duis ullamcorper volutpat sapien a consectetur. Sed vel massa hendrerit, vestibulum enim in, facilisis purus. Aenean blandit dolor neque, a dignissim magna consequat a. Nullam et nunc quis quam aliquam cursus. Donec facilisis nulla a facilisis ornare. Phasellus non tortor nec purus maximus bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
};
