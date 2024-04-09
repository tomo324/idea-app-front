"use client";

import React, { useEffect } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { BrowserView, MobileView } from "react-device-detect";
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";
import Header from "@/components/Header/Header";
import PostList from "@/components/Post/PostList/PostList";

// delete機能をつける(モーダルを使う?)
// useFetchUserを使ってidをlocalstrageに保存する
// TODO useFetchPostを作成する
// TODO idからユーザー名を取得するAPIを作成する
// TODO useFetchUserNameByIdを作成する
// TODO PostItem内で、authoridとlocalstrageのuseridが同じか確認し、そうなら削除ボタンを表示する。backendでの認証は実装済み
// TODO user情報とpost情報を正常に取得できている場合にコンテンツを表示するようにする
// TODO useFetchUserだとマウント時に毎回ユーザーを取得する必要があるので、signup, signinのAPIがuserIdを返すようにする。今はとりあえずuseFetchUserを使う

const UserHome = () => {
  // ユーザー情報を取得するカスタムフックを使う
  const { data, error, isLoading } = useFetchUser();

  useEffect(() => {
    if (data) {
      localStorage.setItem("userId", data.id);
    }
  }, [data]);

  // TODO エラー処理を追加する
  //if (error) return <div>Error: {error.message}</div>;
  //if (isLoading) return <div>loading...</div>;

  // user情報とpost情報を取得できている場合に以下を表示するようにする
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
