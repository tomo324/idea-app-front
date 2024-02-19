import { Meta } from "@storybook/react";
import AuthButton from "./AuthButton";

const meta: Meta<typeof AuthButton> = {
  component: AuthButton,
  title: "AuthButton",
};

export default meta;

export const StorySignupButton = {
  args: {
    path: "auth/signup",
    children: "Sign Up",
  }
};

export const StorySigninButton = {
  args: {
    path: "auth/signin",
    children: "Sign In",
  }
};