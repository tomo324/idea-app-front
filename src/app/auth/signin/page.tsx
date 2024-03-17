import React from "react";
import Link from 'next/link';
import Signin from '../../../components/Signin/Signin';

const SigninPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Link href="/">← back to top</Link>
      <Signin />
    </main>
  );
}

export default SigninPage;