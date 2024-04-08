import { Meta, StoryObj } from "@storybook/react";
import DeletePost from "./DeletePost";

const meta: Meta<typeof DeletePost> = {
  component: DeletePost,
  title: "DeletePost",
};

export default meta;

export const StoryDeletePost: StoryObj<typeof DeletePost> = (
  args: any
) => <DeletePost {...args} />;

StoryDeletePost.args = {
  postId: 1,
};
