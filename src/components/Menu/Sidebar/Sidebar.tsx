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
    <div className="fixed inset-y-0 left-0 w-20 h-screen bg-white border-r">
      <div className="flex flex-col justify-between items-center h-3/5 w-20 bg-white border-r pt-2">
        {icons.map(({ icon, path }) => (
          <div key={path} className="flex items-center">
            <div
              className={`pl-2 my-2 ${
                pathname === path ? "border-l-2 border-blue-500 h-8" : ""
              }`}
            >
            </div>
            <Link
              href={path}
              className="p-2 flex items-center my-2 hover:bg-gray-200 rounded"
            >
              <Icon icon={icon} className="text-2xl" />
            </Link>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Sidebar;
