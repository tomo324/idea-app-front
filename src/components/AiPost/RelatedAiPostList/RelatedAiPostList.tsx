import { useEffect, useState } from "react";
import { AiPost as AiPostType } from "@/interface/post-interface";
import { Box } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";
import AiPostItem from "@/components/AiPost/AiPostItem/AiPostItem";
import RelatedAiPostCreateButton from "@/components/AiPost/RelatedAiPostButton/RelatedAiPostCreateButton/RelatedAiPostCreateButton";
import { useFetchRelatedAiPost } from "@/hooks/ai-post/useFetchRelatedAiPost";

interface RelatedAiPostListProps {
  postId: number;
  aiPostData: AiPostType[];
  setAiPostData: React.Dispatch<React.SetStateAction<AiPostType[]>>;
}

const RelatedAiPostList = ({
  postId,
  aiPostData,
  setAiPostData,
}: RelatedAiPostListProps) => {
  const { data, error, isLoading } = useFetchRelatedAiPost(postId);

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
    <>
      <div className="my-16 sm:ml-4">
        {aiPostData.map((aiPost) => (
          <div key={aiPost.id} className="sm:ml-20 mt-4 mb-4">
            <AiPostItem aiPost={aiPost} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedAiPostList;
