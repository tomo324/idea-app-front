import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Signup from "../Auth/Signup/Signup";
import CreatePost from '@/components/Post/CreatePost/CreatePost';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Modal",
};

export default meta;

export const StoryModal: StoryObj<typeof Modal> = (args: any) => (
  <Modal {...args} />
);

StoryModal.args = {
  children: <CreatePost />,
};
