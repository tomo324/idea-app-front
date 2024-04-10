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
      <div className="flex justify-between items-center bg-white border-t w-full px-4 pb-2">
        {icons.map(({ icon, path }) => (
          <div key={path} className="flex flex-col items-center justify-center">
            <Link
              href={path}
              className="p-1 mt-1 flex items-center justify-center hover:bg-gray-200 rounded"
            >
              <Icon icon={icon} className="text-3xl" />
            </Link>
            <div className={`p-1 ${
              pathname === path ? "border-b-2 border-blue-500 w-10" : ""
            }`}>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
