import React from "react";
import { useGetUser } from "../../hooks/useGetUser";
import { getCookies } from "@/utils/actions/cookies";

// 子のクライアントコンポーネントに渡すためのcookieを取得する親のサーバーコンポーネント

const UserHome = () => {
  const access_token = getCookies();

  // ユーザー情報を取得するカスタムフックを使う
  const { data, error, isLoading } = useGetUser(access_token);

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>hello {data.name}!</h1>
    </div>
  );
};
export default UserHome;
