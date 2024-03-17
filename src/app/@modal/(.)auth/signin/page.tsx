import Modal from '@/components/Modal/Modal';
import Signin from '../../../../components/Signin/Signin';

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <Signin />
      </Modal>
    </div>
  );
}

export default SigninPage;