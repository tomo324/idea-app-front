"use client";

import { Modal as MantineModal } from "@mantine/core";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";

const Modal = ({ children }: { children: any }) => {
  const { back } = useRouter();

  // カスタムフックの呼び出し
  const { opened, open, close } = useModal();

  const closeHandler = () => {
    close();
    back();
  };

  return (
    <>
      <MantineModal
        opened={opened}
        onClose={closeHandler}
        styles={{
          root: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          body: { overflow: "hidden" },
          content: {
            width: "fit-content",
            maxHeight: "100vw",
            overflowY: "auto",
          },
          close: { width: "3rem", position: "absolute", right: 0, top: 10 },
        }}
      >
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
      </MantineModal>
      {opened && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeHandler}
        />
      )}
    </>
  );
};

export default Modal;
