'use client';

import useSWR from "swr";
import { apiUrl } from "@/consts/apiUrl";
import React, { useEffect, useState } from "react";
import { getCookies } from "@/utils/actions/cookies";

export const useGetUser = () => {

  const getUserUrl = `${apiUrl.URL}/users/me`;

  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const token = getCookies();
    setToken(token);
  }, [])

  const fetcher = async (url: string) => {
    if (!token) {
      const error = new Error("No token found. Please login.");
      throw error;
    }
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
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
