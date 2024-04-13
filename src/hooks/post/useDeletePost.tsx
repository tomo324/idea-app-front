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
        setShowModal(false);
        setPostList((prevPostList) => prevPostList.filter(post => post.id !== postId));  
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
