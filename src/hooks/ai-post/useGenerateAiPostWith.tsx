import { AiPost } from "@/interface/post-interface";
import { useCreateAiPost } from "./useCreateAiPost";

export const useGenerateAiPostWith = ({
  setAiPostData,
  setShowModal,
  setIsLoading,
  id,
}: {
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}) => {
  const { handleCreateAiPost } = useCreateAiPost({
    setAiPostData,
    setShowModal,
    setIsLoading,
  });

  const handleGenerateAiPostWith = async () => {
    const generateUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/ai-posts/generate-with/${id}`;
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
        alert(data.message);
      }
    } catch (error) {
      console.log("Fetch Error", error);
      setIsLoading(false);
      alert("Fetch Error");
    }
  };
  return { handleGenerateAiPostWith };
};
