import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useDeletePost } from "@/hooks/post/useDeletePost";
import { Post } from "@/interface/post-interface";

const DeletePost: React.FC<{
  postId: number;
  setPostList: React.Dispatch<React.SetStateAction<Post[]>>;
}> = ({ postId, setPostList }) => {
  const [showModal, setShowModal] = useState(false);

  // 削除後モーダルを閉じた際もスクロール無効が続いてしまうため、コメントアウト
  {
    /* 
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);
*/
  }

  const { handleDelete } = useDeletePost({ postId, setShowModal, setPostList });

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <div className="hover:bg-gray-200 hover:text-red-500 rounded-full inline-block p-1">
          <Icon icon="material-symbols:delete-outline" className="text-xl" />
        </div>
      </button>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-white m-4 p-4 rounded shadow"
          >
            <h2 className="text-lg font-bold mb-4">投稿の削除</h2>
            <p className="mb-4">
              本当にこの投稿を削除しますか？ この操作は取り消せません。
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete()}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePost;
