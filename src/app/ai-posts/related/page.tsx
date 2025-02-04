"use client";

import { useSearchParams } from "next/navigation";
import RelatedAiPostList from "@/components/AiPost/RelatedAiPostList/RelatedAiPostList";
import Header from "@/components/Header/Header";
import { BrowserView, MobileView } from "react-device-detect";
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";
import { useState } from "react";
import { AiPost as AiPostType } from "@/interface/post-interface";
import RelatedAiPostCreateButton from "@/components/AiPost/RelatedAiPostButton/RelatedAiPostCreateButton/RelatedAiPostCreateButton";

const AiPostRelatedPage = () => {
  const [aiPostData, setAiPostData] = useState<AiPostType[]>([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return <div>Invalid ID</div>;
  }

  return (
    <>
      <Header />

      <BrowserView>
        <Sidebar />
      </BrowserView>

      <MobileView>
        <Footer />
      </MobileView>

      <RelatedAiPostList
        postId={Number(id)}
        aiPostData={aiPostData}
        setAiPostData={setAiPostData}
      />
      <div className="fixed right-10 bottom-20 sm:left-[800px] sm:bottom-10">
        <RelatedAiPostCreateButton
          setAiPostData={setAiPostData}
          id={Number(id)}
        />
      </div>
    </>
  );
};

export default AiPostRelatedPage;
