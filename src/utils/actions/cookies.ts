"use server";

import { cookies } from "next/headers";

export const setCookies = (token: string) => {
  // CookieにJWT tokenを保存する
  cookies().set({ name: "access_token", value: token, path: "/" });
};

export const getCookies = () => {
  // クッキーからjwt_tokenを取得
  const access_token = cookies().get("access_token");
  return access_token;
};
