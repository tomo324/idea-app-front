import { AiPost, Post } from "@/interface/post-interface";

export const useCreateAiPost = ({
  setAiPostData,
  setShowModal,
}: {
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCreateAiPost = async (newAiPost: {
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
          content: newAiPost.content,
          firstPostId: newAiPost.posts[0].id,
          secondPostId: newAiPost.posts[1].id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Create Success");
        // レスポンスデータにpost_to_aipostsがないためエラーになる
        //setAiPostData((prevPostList) => [...prevPostList, data]);
        // TODO AIPostのレスポンスデータのpost_to_aipostsテーブルデータは不要。mapで各オブジェクトからaipost, postのみを抽出してuseStateで管理すれば良い
        // TODO よって、AiPostの型定義を修正する
        // TODO setAiPostDataを更新できるように修正する
        // TODO aiPostを新しい順に表示するようにする
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
