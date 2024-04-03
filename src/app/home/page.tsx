"use client";

import React, { useEffect, useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import Sidebar from "@/components/Menu/Sidebar/Sidebar";

const UserHome = () => {
  // ユーザー情報を取得するカスタムフックを使う
  const { data, error, isLoading } = useFetchUser();

  //const data = { name: "test" };
  //const isLoading = false;

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Sidebar />
    </div>
  );
};
export default UserHome;
