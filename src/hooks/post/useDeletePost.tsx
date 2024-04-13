"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/interface/post-interface";

export const useDeletePost = ({
  postId,
  setShowModal,
  setPostList,
}: {
  postId: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPostList: React.Dispatch<React.SetStateAction<Post[]>>;
}) => {

  const [deleteSuccess, setDeleteSuccess] = useState(false);

  // モーダルを閉じる処理と削除成功時に投稿リストから削除する処理を同期的に行う
  useEffect(() => {
    if(deleteSuccess) {
      setShowModal(false);
      setPostList((prevPostList) => prevPostList.filter(post => post.id !== postId));
      setDeleteSuccess(false);
    }
  }, [deleteSuccess, postId, setPostList, setShowModal]);


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
        setDeleteSuccess(true);
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
