"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const icons = [
    { icon: "material-symbols:home-outline", path: "/home" },
    { icon: "mdi:post-outline", path: "/posts" },
    { icon: "carbon:ai", path: "/ai-posts" },
    { icon: "mdi:user-outline", path: "/users" },
  ];

  const pathname = usePathname();

  return (
    <div className="w-20 h-screen bg-white border-r">
      <div className="flex flex-col justify-between items-center h-3/5 w-20 bg-white border-r">
        {icons.map(({ icon, path }) => (
          <Link
            href={path}
            key={path}
            className={`p-2 flex items-center my-4 ${
              pathname === path ? "border-l-2 border-blue-500 h-8" : ""
            }`}
          >
            <Icon icon={icon} className="text-2xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
