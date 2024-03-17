"use client";

import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useModal = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [prevPath, setPrevPath] = useState(pathname);

  // ページ遷移時にモーダルを閉じる
  useEffect(() => {
    if (prevPath !== pathname) {
      close();
    }
    setPrevPath(pathname);
  }, [pathname, searchParams, close, prevPath]);

  return { opened, open, close };
};
