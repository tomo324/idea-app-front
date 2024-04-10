"use client";

import useSWR from "swr";

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
      throw error;
    }
    return response.json();
  };
  const { data, error, isLoading, isValidating } = useSWR(
    getUserNameUrl,
    fetcher
  );

  console.log(
    isValidating ? "Fetching from server..." : "Fetching from cache..."
  );

  return { data, error, isLoading };
};
