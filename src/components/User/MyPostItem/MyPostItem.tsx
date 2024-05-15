import React from "react";
import { Post } from "@/interface/post-interface";
import DeletePost from "@/components/Post/DeletePost/DeletePost";

const MyPostItem = ({
  post,
  setPostList,
  userName,
}: {
  post: Post;
  setPostList: React.Dispatch<React.SetStateAction<Post[]>>;
  userName: string;
}) => {

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
          {userName}
        </div>
        <p
          style={{ overflowWrap: "anywhere" }}
          className="block mt-3 text-lg leading-tight font-medium text-black whitespace-break-spaces"
        >
          {post.content}
        </p>
        <div className="flex mt-2 justify-between">
          <p className="text-gray-500">{localDate}</p>
          <DeletePost postId={post.id} setPostList={setPostList} />
        </div>
      </div>
    </div>
  );
};

export default MyPostItem;
