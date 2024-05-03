import { Meta, StoryObj } from "@storybook/react";
import AccordionItem from "./AccordionItem";

const meta: Meta<typeof AccordionItem> = {
  component: AccordionItem,
  title: "AccordionItem",
};
export default meta;

export const StoryAccordionItem: StoryObj<typeof AccordionItem> = (
  args: any
) => <AccordionItem {...args} />;

StoryAccordionItem.args = {
  post: {
    id: 1,
    content: "元になったコンテンツ。",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    authorId: 1,
  },
};
