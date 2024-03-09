import Modal from "@/components/Modal/Modal";
import Signup from "../../../../components/Signup/Signup";
import React from "react";
import { setCookies } from "@/utils/actions/cookies";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <Signup setCookies={setCookies} />
      </Modal>
    </div>
  );
};
export default SignupPage;
