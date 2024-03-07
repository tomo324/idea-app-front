import React, { useEffect, useState } from "react";
import { useGetUser } from "../../hooks/useGetUser";
import { cookies } from "next/headers";

const UserHome = () => {

  // クッキーからjwt_tokenを取得
  const access_token = cookies().get("access_token");

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
