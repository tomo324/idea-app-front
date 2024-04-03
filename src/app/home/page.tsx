"use client";

import React from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { BrowserView, MobileView } from "react-device-detect"
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";

const UserHome = () => {
  // ユーザー情報を取得するカスタムフックを使う
  const { data, error, isLoading } = useFetchUser();

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>

      <BrowserView>
        <Sidebar />
      </BrowserView>

      <MobileView>
        <Footer />
      </MobileView>

    <p>hello, {data?.name}!</p>
    </div>
  );
};
export default UserHome;
