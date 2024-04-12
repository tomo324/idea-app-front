"use client";

import React from "react";

export const useDeletePost = ({
  postId,
  setShowModal,
}: {
  postId: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleDelete = async () => {
    const deleteUrl = `${
      process.env.NEXT_PUBLIC_SERVER_URL
    }/posts/${postId.toString()}`;

    try {
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Success");
        // モーダルを閉じる
        setShowModal(false);
      } else {
        // レスポンスが失敗した場合
        const data = await response.json();
        console.log("Server Error", data);
        alert("Server Error");
      }
    } catch (error) {
      console.log("Fetch Error", error);
      alert("Fetch Error");
    }
  };

  return { handleDelete };
};
