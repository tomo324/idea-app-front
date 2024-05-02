import { useEffect } from "react";
import { AiPost } from "../../../interface/post-interface";
import AiPostItem from "../AiPostItem/AiPostItem";
import { useFetchAiPost } from "@/hooks/ai-post/useFetchAiPost";

const AiPostList = ({
  aiPostList,
  setAiPostList,
}: {
  aiPostList: AiPost[];
  setAiPostList: React.Dispatch<React.SetStateAction<AiPost[]>>;
}) => {
  const { data, error, isLoading } = useFetchAiPost();

  useEffect(() => {
    if (data) {
      setAiPostList(data);
    }
  }, [data, setAiPostList]);

  if (error)
    return <div className="sm:ml-24 mt-20">Error: {error.message}</div>;
  if (isLoading) return <div className="sm:ml-24 mt-20">loading...</div>;

  if (!aiPostList || aiPostList.length === 0) {
    return <div className="sm:ml-24 mt-20">No post data</div>;
  }

  if (typeof aiPostList[0] === 'undefined') {
    return <div className="sm:ml-24 mt-20">AIPost is undefined</div>
  }

  return (
    <div className="mt-16 sm:ml-4">
      {aiPostList.map((aiPost) => (
        <div key={aiPost.id} className="sm:ml-20 mt-4 mb-4">
          <AiPostItem aiPost={aiPost} />
        </div>
      ))}
    </div>
  );
};

export default AiPostList;
