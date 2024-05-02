import { Meta, StoryObj } from "@storybook/react";
import AiPostItem from "./AiPostItem";

const meta: Meta<typeof AiPostItem> = {
  component: AiPostItem,
  title: "AiPostItem",
};
export default meta;

export const StoryAiPostItem: StoryObj<typeof AiPostItem> = (args: any) => (
  <AiPostItem {...args} />
);

StoryAiPostItem.args = {
  aiPost: {
    id: 1,
    content: "テストAIコンテンツ。            ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。                                         ",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    post_to_aiposts: [
      {
        id: 1,
        postId: 1,
        aipostId: 1,
        post: {
          id: 1,
          content: "元になったコンテンツ。テストコンテンツ。            ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります",
          createdAt: "2020-01-01",
          updatedAt: "2020-01-01",
          authorId: 1,
        },
      },
      {
        id: 2,
        postId: 2,
        aipostId: 2,
        post: {
          id: 2,
          content: "元になったコンテンツ2。",
          createdAt: "2020-01-01",
          updatedAt: "2020-01-01",
          authorId: 1,
        },
      },
    ]
  },
};
