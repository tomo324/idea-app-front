import { useEffect } from "react";
import { AiPost } from "../../../interface/post-interface";
import AiPostItem from "../AiPostItem/AiPostItem";
import { useFetchAiPost } from "@/hooks/ai-post/useFetchAiPost";
import { Box } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";

const AiPostList = ({
  aiPostData,
  setAiPostData,
}: {
  aiPostData: AiPost[];
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
}) => {
  const { data, error, isLoading } = useFetchAiPost();

  useEffect(() => {
    if (data) {
      setAiPostData(data);
    }
  }, [data, setAiPostData]);

  if (error)
    return <div className="sm:ml-24 mt-20">Error: {error.message}</div>;
  if (isLoading)
    return (
      <Box className="flex justify-center items-start mt-20">
        <CircularProgress color="inherit" />
      </Box>
    );

  if (!aiPostData || aiPostData.length === 0) {
    return <div className="sm:ml-24 mt-20">No post data</div>;
  }

  if (typeof aiPostData[0] === "undefined") {
    return <div className="sm:ml-24 mt-20">AIPost is undefined</div>;
  }

  return (
    <div className="my-16 sm:ml-4">
      <div className="ml-36 sm:ml-[390px] mt-4 text-gray-500">AI Posts</div>
      {aiPostData.map((aiPost) => (
        <div key={aiPost.id} className="sm:ml-20 mt-4 mb-4">
          <AiPostItem aiPost={aiPost} />
        </div>
      ))}
    </div>
  );
};

export default AiPostList;
