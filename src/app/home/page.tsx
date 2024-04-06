"use client";

import React from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { BrowserView, MobileView } from "react-device-detect"
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";
import Header from "@/components/Header/Header";
import PostList from "@/components/PostList/PostList";

const UserHome = () => {

  // TODO 初回のみユーザー情報を取得し、id, nameをローカルに保存する
  // ユーザー情報を取得するカスタムフックを使う
  //const { data, error, isLoading } = useFetchUser();

  //if (error) return <div>Error: {error.message}</div>;
  //if (isLoading) return <div>loading...</div>;

  return (
    <div>

      <Header />

      <BrowserView>
        <Sidebar />
      </BrowserView>

      <MobileView>
        <Footer />
      </MobileView>

      <PostList />
    </div>
  );
};
export default UserHome;
