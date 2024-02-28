"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const AuthModal = ({ children }: { children: ReactNode }) => {
  const [opened, { open, close }] = useDisclosure(true);

  const { back } = useRouter();
  const closeHandler = () => {
    close();
    back();
  }

  return (
    <>
      <Modal
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
          content: { width: "fit-content" },
          close: { width: "3rem", position: "absolute", right: 0, top: 10 },
        }}
      >
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
      </Modal>
      {opened && <div className="fixed inset-0 bg-black opacity-50" onClick={closeHandler} />}
    </>
  );
};

export default AuthModal;
