import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

const DeletePostButton: React.FC<{ path: string }> = ({ path }) => {
  return (
    <Link href={path}>
      <div className=' hover:bg-gray-200 hover:text-red-500 rounded-full inline-block p-1'>
        <Icon icon="material-symbols:delete-outline" className='text-xl' />
      </div>
    </Link>
  )
}

export default DeletePostButton;