import { useFetchMyPost } from "@/hooks/post/useFetchMyPost";
import MyPostItem from "../MyPostItem/MyPostItem";
import { useEffect, useState } from "react";
import { Post } from "@/interface/post-interface";
import { Box } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";

const MyPostList = ({ userName }: { userName: string }) => {
  const { data, error, isLoading } = useFetchMyPost();
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPostList(data);
    }
  }, [data]);

  if (error)
    return <div className="sm:ml-24 mt-20">Error: {error.message}</div>;
  if (isLoading)
    return (
      <Box className="flex justify-center items-start mt-20">
        <CircularProgress color="inherit" />
      </Box>
    );

  if (!postList || postList.length === 0) {
    return <div className="sm:ml-24 mt-20">No post data</div>;
  }

  return (
    <div className="my-16 sm:ml-4">
      {postList.map((post) => (
        <div key={post.id} className="sm:ml-20 mt-4 mb-4">
          <MyPostItem post={post} setPostList={setPostList} userName={userName} />
        </div>
      ))}
    </div>
  );
};

export default MyPostList;
