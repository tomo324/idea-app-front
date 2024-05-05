import { AiPost } from "@/interface/post-interface";
import { useCreateAiPost } from "./useCreateAiPost";

export const useGenerateAiPost = ({
  setAiPostData,
  setShowModal,
}: {
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { handleCreateAiPost } = useCreateAiPost({
    setAiPostData,
    setShowModal,
  });

  const handleGenerateAiPost = async () => {
    const generateUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/ai-posts/generate`;

    try {
      const response = await fetch(generateUrl, {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Generate Success");
        handleCreateAiPost(data);
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
  return { handleGenerateAiPost };
};
