import React, { useEffect, useState } from "react";
import DeletePost from "../DeletePost/DeletePost";
import { useFetchUserNameById } from "@/hooks/user/useFetchUserNameById";

interface Post {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
}

const PostItem = ({
  post,
  setPostList,
}: {
  post: Post;
  setPostList: React.Dispatch<React.SetStateAction<Post[]>>;
}) => {
  // カスタムフックを使い、投稿者の名前を取得する
  const { authorName } = useFetchUserNameById(post.authorId);
  const [isOwnPost, setIsOwnPost] = useState(false);

  // 投稿が自分のものかどうかを判定する
  useEffect(() => {
    if (authorName) {
      const userId = localStorage.getItem("userId");
      if (userId && Number(userId) === post.authorId) {
        setIsOwnPost(true);
      }
    }
  }, [authorName, post.authorId]);

  if (!post) {
    return null;
  }

  return (
    <div className="max-w-md md:max-w-2xl bg-white rounded-xl shadow-md overflow-hidden m-3">
      <div className="p-8 flex flex-col flex-wrap">
        <div
          style={{ overflowWrap: "anywhere" }}
          className="tracking-wide text-sm text-indigo-500 font-semibold whitespace-normal"
        >
          {authorName}
        </div>
        <p
          style={{ overflowWrap: "anywhere" }}
          className="block mt-1 text-lg leading-tight font-medium text-black whitespace-break-spaces"
        >
          {post.content}
        </p>
        <div className="flex mt-2 justify-between">
          <p className="text-gray-500">{post.createdAt}</p>
          {isOwnPost && (
            <DeletePost postId={post.id} setPostList={setPostList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
