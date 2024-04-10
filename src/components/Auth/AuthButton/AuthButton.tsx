import Link from "next/link";
import React from "react";

interface AuthButtonProps {
  path: string;
  children: React.ReactNode;
}

const AuthButton: React.FC<AuthButtonProps> = ({ path, children }) => {
  return (
    <Link href={path} className="inline-block bg-[#a2dbfa] text-white font-medium py-1 px-2 sm:py-2 sm:px-4 lg:text-xl text-xs rounded hover:bg-[#81c0e9] cursor-pointer">
      {children}
    </Link>
  );
};

export default AuthButton;