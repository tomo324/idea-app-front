import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const icons = [
    { icon: "material-symbols:home-outline", path: "/home" },
    { icon: "mdi:post-outline", path: "/posts" },
    { icon: "carbon:ai", path: "/ai-posts" },
    { icon: "mdi:user-outline", path: "/users" },
  ];

  const pathname = usePathname();

  return (
    <footer className="fixed inset-x-0 bottom-0 bg-white flex justify-center">
      <div className="flex justify-between items-center bg-white border-t w-full px-4 py-2">
        {icons.map(({ icon, path }) => (
          <Link
            href={path}
            key={path}
            className={`p-2 flex items-center justify-center hover:bg-gray-200 ${
              pathname === path ? "border-b-2 border-blue-500 h-8" : ""
            }`}
          >
            <Icon icon={icon} className="text-2xl" />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
