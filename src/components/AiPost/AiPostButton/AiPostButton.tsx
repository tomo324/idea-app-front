"use client";

import { useGenerateAiPost } from "@/hooks/ai-post/useGenerateAiPost";
import { AiPost } from "@/interface/post-interface";
import { Icon } from "@iconify/react";
import { useState } from "react";

const AiPostButton = ({ setAiPostData }: { setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>> }) => {
  const [showModal, setShowModal] = useState(false);

  const { handleGenerateAiPost } = useGenerateAiPost({ setAiPostData, setShowModal })

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <div className="bg-blue-300 text-white hover:bg-blue-400 rounded-full border inline-block p-3">
          <Icon icon="streamline:ai-edit-spark" className="text-2xl" />
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
            <h2 className="text-lg font-bold mb-4">AI生成</h2>
            <p className="mb-4">
              アイデアをランダムに取得し、AIが融合を行います。
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => handleGenerateAiPost()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AiPostButton;
