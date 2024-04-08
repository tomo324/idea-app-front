import Link from 'next/link';
import React from 'react';
import PostButton from '../Post/PostButton/PostButton';

const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 bg-white bg-opacity-90 border-b sm:ml-20">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link href="/home" className="text-[#70bee8] sm:ml-8 ml-4 sm:text-3xl text-2xl font-bold">AIdea Park</Link>
        <PostButton />
      </div>
    </header>
  );
};

export default Header;