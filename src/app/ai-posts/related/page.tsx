"use client";

import { useSearchParams } from "next/navigation";
import RelatedAiPostList from "@/components/AiPost/RelatedAiPostList/RelatedAiPostList";
import Header from "@/components/Header/Header";
import { BrowserView, MobileView } from "react-device-detect";
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";

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
