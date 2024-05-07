import { AiPost } from "@/interface/post-interface";
import { useCreateAiPost } from "./useCreateAiPost";

export const useGenerateAiPost = ({
  setAiPostData,
  setShowModal,
  setIsLoading,
}: {
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { handleCreateAiPost } = useCreateAiPost({
    setAiPostData,
    setShowModal,
    setIsLoading,
  });

  const handleGenerateAiPost = async () => {
    const generateUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/ai-posts/generate`;
    // ローディング中にする
    setIsLoading(true);

    try {
      const response = await fetch(generateUrl, {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Generate Success");
        // 生成したAIPostを投稿する
        handleCreateAiPost(data);
      } else {
        // レスポンスが失敗した場合
        console.log("Server Error", data);
        setIsLoading(false);
        alert("Server Error");
      }
    } catch (error) {
      console.log("Fetch Error", error);
      setIsLoading(false);
      alert("Fetch Error");
    }
  };
  return { handleGenerateAiPost };
};
