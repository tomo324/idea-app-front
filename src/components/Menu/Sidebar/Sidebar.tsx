import React from 'react';
import Link from "next/link";
import { Icon } from '@iconify/react';

const Sidebar: React.FC = () => {
  const icons = [
    { icon: 'material-symbols:home-outline', path: '/home' },
    { icon: 'mdi:post-outline', path: '/posts' },
    { icon: 'carbon:ai', path: '/ai-posts' },
    { icon: 'mdi:user-outline', path: '/users' },
  ];

  return (
    <div className='w-20 h-screen bg-white'>
      <div className="flex flex-col justify-between items-center h-3/5 w-20 bg-white">
        {icons.map(({ icon, path }) => (
          <Link href={path} key={path}>
            <Icon icon={icon} className="my-4 text-2xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;