import React, { useEffect, useState } from "react";
import DeletePost from "../DeletePost/DeletePost";
import { useFetchUserNameById } from "@/hooks/user/useFetchUserNameById";
import { Post } from "@/interface/post-interface";
import RelatedAiPostButton from "@/components/AiPost/RelatedAiPostButton/RelatedAiPostButton";

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

  // ユーザーの場所を取得し、投稿日時をローカルタイムゾーンで表示する
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const localDate = new Date(post.createdAt).toLocaleString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

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
          className="block mt-3 text-lg leading-tight font-medium text-black whitespace-break-spaces"
        >
          {post.content}
        </p>
        <div className="flex mt-2 items-center">
          <p className="text-gray-500">{localDate}</p>
          <div className="ml-auto flex space-x-4">
            <RelatedAiPostButton id={post.id} />
            {isOwnPost && (
              <DeletePost postId={post.id} setPostList={setPostList} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
