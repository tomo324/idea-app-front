"use client";

import { useGenerateAiPost } from "@/hooks/ai-post/useGenerateAiPost";
import { AiPost } from "@/interface/post-interface";
import { Icon } from "@iconify/react";
import { Box } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

const AiPostButton = ({
  setAiPostData,
}: {
  setAiPostData: React.Dispatch<React.SetStateAction<AiPost[]>>;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleGenerateAiPost } = useGenerateAiPost({
    setAiPostData,
    setShowModal,
    setIsLoading,
  });

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <div className="bg-blue-400 text-white hover:bg-blue-300 rounded-full border inline-block p-3">
          <Icon icon="carbon:ai-launch" className="text-2xl" />
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

            {isLoading ? (
              <Box className="flex float-right mr-7">
                <CircularProgress />
              </Box>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AiPostButton;
