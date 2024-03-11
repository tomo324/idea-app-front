import React from "react";
import Signup from "@/components/Signup/Signup";
import Link from "next/link";
import { setCookies } from "@/utils/actions/cookies";

const SignupPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Link href="/">← back to top</Link>
      <Signup />
    </main>
  );
};
export default SignupPage;
