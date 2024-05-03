"use client";

import useSWR from "swr";

export const useFetchAiPost = () => {
  const getAiPostUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/ai-posts`;

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
  const { data, error, isLoading, isValidating } = useSWR(getAiPostUrl, fetcher);

  console.log(isValidating ? 'Fetching from server...' : 'Fetching from cache...');

  return { data, error, isLoading };
};
