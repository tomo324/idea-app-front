import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 bg-white bg-opacity-10 border-b sm:ml-20">
      <div className="container mx-auto py-2">
        <Link href="/home" className="text-[#69b1d8] sm:ml-8 ml-4 sm:text-3xl text-2xl font-ibm">AIdea Park</Link>
      </div>
    </header>
  );
};

export default Header;