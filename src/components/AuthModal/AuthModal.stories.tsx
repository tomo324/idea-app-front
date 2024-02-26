import { Meta, StoryObj } from "@storybook/react";
import AuthModal from "./AuthModal";
import Signup from "../Signup/Signup";


const meta: Meta<typeof AuthModal> = {
  component: AuthModal,
  title: "AuthModal",
};

export default meta;

export const StoryAuthModal: StoryObj<typeof AuthModal> = (args: any) => <AuthModal {...args} />;

StoryAuthModal.args = {
  children: <Signup />,
};
