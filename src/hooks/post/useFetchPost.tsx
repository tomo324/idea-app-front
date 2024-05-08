"use client";

import useSWR from "swr";

export const useFetchPost = () => {
  const getPostUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/posts`;

  const fetcher = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    if (response.status === 401) {
      const error = new Error("Your token is expired. Please login again.");
      throw error;
    } else if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      throw error;
    }
    return response.json();
  };
  const { data, error, isLoading, isValidating } = useSWR(getPostUrl, fetcher);

  console.log(
    isValidating ? "Fetching from server..." : "Fetching from cache..."
  );

  return { data, error, isLoading };
};
