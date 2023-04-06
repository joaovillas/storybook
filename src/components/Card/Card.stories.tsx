import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import React from "react";
import Heading from "../Heading";
import Subtitle from "../Subtitle";
import Paragraph from "../Paragraph";
import Button from "../Button";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div className="sm:w-5/12">
        {Story()}
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, erat non posuere sagittis, metus velit pellentesque sem, nec efficitur ligula ligula non augue. Ut interdum quis nulla eu cursus. Duis ullamcorper volutpat sapien a consectetur. Sed vel massa hendrerit, vestibulum enim in, facilisis purus. Aenean blandit dolor neque, a dignissim magna consequat a. Nullam et nunc quis quam aliquam cursus. Donec facilisis nulla a facilisis ornare. Phasellus non tortor nec purus maximus bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
};

export const CardContent: StoryObj = {
  name: "Card Content",
  render: () => (
    <Card>
      <Heading className="spacing-stack-xxxs" as="h2">
        Heading SM
      </Heading>
      <Subtitle className="spacing-stack-xxs">Subtitle SM</Subtitle>
      <Paragraph className="spacing-stack-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer when an unknown printer took a
        galley of type and scrambled.
      </Paragraph>
      <Button>Button Label</Button>
    </Card>
  ),
};
