import { useFetchPost } from "@/hooks/post/useFetchPost";
import PostItem from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import { Post } from "@/interface/post-interface";

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
  if (isLoading) return <div className="sm:ml-24 mt-20">loading...</div>;

  if (!postList || postList.length === 0) {
    return <div className="sm:ml-24 mt-20">No post data</div>;
  }
  return (
    <div className="my-16 sm:ml-4">
      {postList.map((post) => (
        <div key={post.id} className="sm:ml-20 mt-4 mb-4">
          <PostItem post={post} setPostList={setPostList} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
