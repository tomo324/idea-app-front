"use client";

import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useModal = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [prevPath, setPrevPath] = useState(pathname);
  const { refresh } = useRouter();

  // ページ遷移時にモーダルを閉じる
  useEffect(() => {
    if (prevPath !== pathname) {
      close();
      // モーダルを閉じた後にページをリフレッシュして現在のURLを反映させる
      refresh();
    }
    setPrevPath(pathname);
  }, [pathname, searchParams, close, prevPath, refresh]);

  return { opened, open, close };
};
