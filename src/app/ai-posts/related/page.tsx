"use client";

import { useSearchParams } from "next/navigation";
import RelatedAiPostList from "@/components/AiPost/RelatedAiPostList/RelatedAiPostList";

const AiPostRelatedPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <RelatedAiPostList postId={Number(id)} />
    </>
  );
};

export default AiPostRelatedPage;
