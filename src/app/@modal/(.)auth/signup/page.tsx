import AuthModal from '@/components/AuthModal/AuthModal';
import Signup from '../../../../components/Signup/Signup';
import React from "react";


const SignupPage = () => {
  return (
    <div className='flex items-center justify-center'>
      <AuthModal>
        <Signup />
      </AuthModal>
    </div>
  )
} 
export default SignupPage;
