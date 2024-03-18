import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Signup from "../Signup/Signup";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "AuthModal",
};

export default meta;

export const StoryAuthModal: StoryObj<typeof Modal> = (args: any) => (
  <Modal {...args} />
);

StoryAuthModal.args = {
  children: <Signup />,
};
