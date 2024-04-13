import { useFetchPost } from "@/hooks/post/useFetchPost";
import PostItem from "../PostItem/PostItem";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
}

// Create -> 返ってきたpostをsetPostListで更新する
// TODO postListではなくprevPostListを使う
// モーダルを閉じた後、スクロールできるようにする
// TODO Postのinterfaceを一つにまとめる

const PostList: React.FC = () => {

  { /* 
  const mockPost: Post[] = [{
    id: 1,
    content: "テストコンテンツ。            ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。                                         ",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    authorId: 1,
  },
  {
    id: 2,
    content: "テストコンテンツ。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    authorId: 2,
  }]
*/ }

  const { data, error, isLoading } = useFetchPost();
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPostList(data);
    }
  }, [data])

  if (error) return <div className="sm:ml-24 mt-20">Error: {error.message}</div>;
  if (isLoading) return <div className="sm:ml-24 mt-20">loading...</div>;

  if (!postList || postList.length === 0) {
    return <div className="sm:ml-24 mt-20">No post data</div>;
  }
  return (
    <>
      {postList.map((post) => (
        <div key={post.id} className="sm:ml-20 mt-16 mb-10">
          <PostItem post={post} setPostList={setPostList} />
        </div>
      ))}
    </>
  );
}

export default PostList;