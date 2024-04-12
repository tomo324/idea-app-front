"use client";

import useSWR from "swr";

// TODO 名前を取得するのは最初だけでいいのでswrを使わずに実装する

export const useFetchUserNameById = (userId: number) => {
  const getUserNameUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${userId}`;

  const fetcher = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      console.error("useFetchUserNameById", error);
      throw error;
    }
    return response.text();
  };
  const { data, error, isLoading, isValidating } = useSWR(
    getUserNameUrl,
    fetcher
  );

  const authorName = data;

  console.log(
    isValidating ? "Fetching from server..." : "Fetching from cache..."
  );

  return { authorName , error, isLoading };
};
