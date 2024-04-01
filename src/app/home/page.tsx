'use client';

import React, { useEffect, useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";

const UserHome = () => {

  // ユーザー情報を取得するカスタムフックを使う
  const { data, error, isLoading } = useFetchUser();

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>hello {data.name}!</h1>
    </div>
  );
};
export default UserHome;
