"use client";

import useSWR from "swr";
import { apiUrl } from "@/consts/apiUrl";

export const useGetUser = () => {
  const getUserUrl = `${apiUrl.URL}/users/me`;

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
  const { data, error, isLoading } = useSWR(getUserUrl, fetcher);

  return { data, error, isLoading };
};
