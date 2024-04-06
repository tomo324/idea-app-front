import { Meta, StoryObj } from "@storybook/react";
import PostItem from "./PostItem";

const meta: Meta<typeof PostItem> = {
  component: PostItem,
  title: "PostItem",
};

export default meta;

export const StoryPostItem: StoryObj<typeof PostItem> = (args: any) => (
  <PostItem {...args} />
);

StoryPostItem.args = {
  post: {
    id: 1,
    content: "テストコンテンツ。            ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。                                         ",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    authorId: 1,
  },
};
