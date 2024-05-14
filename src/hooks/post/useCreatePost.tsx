"use client";

import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { PostForm } from "@/interface/post-interface";

export const useCreatePost = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(true);

  const submitPost = async (data: PostForm) => {
    const postUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/posts/create`;
    const { content } = data;

    try {
      const response = await fetch(postUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success");
        router.push("/home");
      } else {
        // レスポンスが失敗した場合
        console.log("Server Error", data);
        alert(data.message);
      }
    } catch (error) {
      console.log("Fetch Error", error);
      alert("Fetch Error");
    }
  };

  return { submitPost };
};
