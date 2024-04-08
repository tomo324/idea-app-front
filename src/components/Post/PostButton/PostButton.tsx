import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

const PostButton: React.FC = () => {
  return (
    <div className='flex justify-end'>
      <Link href="/posts/create" className="sm:mr-8 mr-4 inline-block bg-[#70bee8] text-white font-medium sm:py-2 sm:px-3 py-1 px-2 sm:rounded rounded-full hover:bg-[#81c0e9] cursor-pointer">
        <Icon icon="flowbite:pen-nib-outline" className="sm:text-2xl text-xl inline-block"/>
        <span className="sm:inline hidden">投稿する</span>
      </Link>
    </div>
  );
};

export default PostButton;