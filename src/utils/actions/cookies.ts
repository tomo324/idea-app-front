'use server';

import { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies'

export const setCookies = (token: string) => {
  // CookieにJWT tokenを保存する
  nookies.set(null, 'access_token', token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // HTTPSを使用している場合にはsecureオプションを有効にする
  });
};

export const getCookies = () => {
  // Cookieからjwt_tokenを取得
  const cookies = nookies.get(null);
  const access_token = cookies.access_token;
  return access_token;
};


{/* 
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
*/}