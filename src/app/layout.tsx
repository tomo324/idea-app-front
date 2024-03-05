import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIdea park",
  description: "アイデアを共有しよう",
};

export default function RootLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
      <html lang="ja">
        <body>
          <MantineProvider>
            <div className={inter.className}>{children}{modal}</div>
          </MantineProvider>
        </body>
      </html>
  );
}
