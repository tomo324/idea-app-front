"use client";

import React from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { BrowserView, MobileView } from "react-device-detect"
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";
import Header from "@/components/Header/Header";
import PostList from "@/components/Post/PostList/PostList";

// TODO delete機能をつける(モーダルを使う?)
// TODO useFetchUserを使ってid, nameをlocalstrageに保存する
// TODO useFetchUserが初回のみ呼ばれることを確認する
// TODO useFetchPostを作成する
// TODO idからユーザー名を取得するAPIを作成する
// TODO useFetchUserNameByIdを作成する
// TODO PostItem内で、authoridとlocalstrageのuseridが同じか確認し、そうなら削除ボタンを表示する。backendでの認証は実装済み


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
