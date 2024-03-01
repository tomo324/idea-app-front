'use client';

import useSWR from "swr";
import { apiUrl } from "@/consts/apiUrl";

export const useGetUser = (jwt_token: string | null) => {
  const getUserUrl = `${apiUrl.URL}/users/me`;

  const fetcher = async (url: string) => {
    if (!jwt_token) {
      const error = new Error("No token found. Please login.");
      throw error;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
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
