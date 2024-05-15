import { useFetchPost } from "@/hooks/post/useFetchPost";
import PostItem from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import { Post } from "@/interface/post-interface";
import { Box } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";

const PostList: React.FC = () => {
  const { data, error, isLoading } = useFetchPost();
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
      <div className="ml-40 sm:ml-[390px] mt-4 text-gray-500">Posts</div>
      {postList.map((post) => (
        <div key={post.id} className="sm:ml-20 mt-4 mb-4">
          <PostItem post={post} setPostList={setPostList} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
