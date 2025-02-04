"use client";

import { useSearchParams } from "next/navigation";
import RelatedAiPostList from "@/components/AiPost/RelatedAiPostList/RelatedAiPostList";
import Modal from "@/components/Modal/Modal";
import RelatedAiPostCreateButton from "@/components/AiPost/RelatedAiPostButton/RelatedAiPostCreateButton/RelatedAiPostCreateButton";
import { AiPost as AiPostType } from "@/interface/post-interface";
import { useState } from "react";

const AiPostRelatedPage = () => {
  const [aiPostData, setAiPostData] = useState<AiPostType[]>([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return <div>Invalid ID</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <div>
          <div className="max-h-[100vh] sm:max-h-[80vh] max-w-[95vw] md:max-w-[80vw] w-full overflow-y-auto px-2 md:px-4 py-4">
            <RelatedAiPostList
              postId={Number(id)}
              aiPostData={aiPostData}
              setAiPostData={setAiPostData}
            />
          </div>
          <div className="fixed right-10 bottom-20 sm:left-[500px] sm:bottom-10">
            <RelatedAiPostCreateButton
              setAiPostData={setAiPostData}
              id={Number(id)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AiPostRelatedPage;
