import Modal from "@/components/Modal/Modal";
import Signin from "../../../../components/Auth/Signin/Signin";

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <Signin />
      </Modal>
    </div>
  );
};

export default SigninPage;
