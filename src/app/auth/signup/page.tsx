import React from "react";
import Signup from "@/components/Auth/Signup/Signup";
import Link from "next/link";

const SignupPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Link href="/">← back to top</Link>
      <Signup />
    </main>
  );
};
export default SignupPage;
