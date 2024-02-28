import React from "react";
import Signup from "@/components/Signup/Signup";
import Link from "next/link";

const SignupPage = () => {
  return (
      <main>
        <div>
          <Signup />
        </div>
        <Link href="/">back to top</Link>
      </main>
  )
} 
export default SignupPage;
