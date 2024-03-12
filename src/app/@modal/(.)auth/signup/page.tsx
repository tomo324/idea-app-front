import Modal from "@/components/Modal/Modal";
import Signup from "../../../../components/Signup/Signup";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <Signup />
      </Modal>
    </div>
  );
};
export default SignupPage;
