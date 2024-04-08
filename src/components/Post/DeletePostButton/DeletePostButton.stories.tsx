import { Meta, StoryObj } from "@storybook/react";
import DeletePostButton from "./DeletePostButton";

const meta: Meta<typeof DeletePostButton> = {
  component: DeletePostButton,
  title: "DeletePostButton",
};

export default meta;

export const StoryDeletePostButton: StoryObj<typeof DeletePostButton> = (args: any) => (
  <DeletePostButton {...args} />
);

StoryDeletePostButton.args = {
  path: "/posts/delete/1",
};