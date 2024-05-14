import { AiPost, Post } from "@/interface/post-interface";

export const useCreateAiPost = ({
  setAiPostData,
  setShowModal,
  setIsLoading,
}: {
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
        // 新しいAiPostを追加
        setAiPostData((prevPostList) => [newAiPost, ...prevPostList]);
        // ローディングを解除
        setIsLoading(false);
        // モーダルを閉じる
        setShowModal(false);
      } else {
        // レスポンスが失敗した場合
        console.log("Server Error", data);
        setIsLoading(false);
        alert(data.message);
      }
    } catch (error) {
      console.log("Fetch Error", error);
      setIsLoading(false);
      alert("Fetch Error");
    }
  };
  return { handleCreateAiPost };
};
