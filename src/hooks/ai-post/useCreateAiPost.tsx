import { AiPost, Post } from "@/interface/post-interface";

export const useCreateAiPost = ({
  setAiPostData,
  setShowModal,
}: {
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCreateAiPost = async (generatedData: {
    content: string;
    posts: Post[];
  }) => {
    const postUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/ai-posts/create`;

    try {
      const response = await fetch(postUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: generatedData.content,
          firstPostId: generatedData.posts[0].id,
          secondPostId: generatedData.posts[1].id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Create Success");
        const newAiPost = { ...data, posts: generatedData.posts };
        // レスポンスデータにpost_to_aipostsがないためエラーになる
        setAiPostData((prevPostList) => [newAiPost, ...prevPostList]);
        setShowModal(false);
      } else {
        // レスポンスが失敗した場合
        console.log("Server Error", data);
        alert("Server Error");
      }
    } catch (error) {
      console.log("Fetch Error", error);
      alert("Fetch Error");
    }
  };
  return { handleCreateAiPost };
};
