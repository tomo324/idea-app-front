"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const AuthModal = ({ children }: { children: ReactNode }) => {
  const [opened, { open, close }] = useDisclosure(false);

  // openを親コンポーネントからpropsで受け取るようにする
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        styles={{
          root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(128, 128, 128, 0.5)",
          },
          content: { width: "fit-content" },
          close: { width: "3rem", position: "absolute", right: 0 },
        }}
      >
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
};

export default AuthModal;
