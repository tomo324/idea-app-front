"use client";

import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";
import Header from "@/components/Header/Header";
import AiPostList from "@/components/AiPost/AiPostList/AiPostList";
import { AiPost as AiPostType } from "@/interface/post-interface";
import AiPostButton from "@/components/AiPost/AiPostButton/AiPostButton";

const AiPost = () => {
  const [aiPostData, setAiPostData] = useState<AiPostType[]>([]);

  return (
    <>
      <Header />

      <BrowserView>
        <Sidebar />
      </BrowserView>

      <MobileView>
        <Footer />
      </MobileView>

      <AiPostList aiPostData={aiPostData} setAiPostData={setAiPostData} />

      <BrowserView>
        <div className="fixed right-10 bottom-10">
          <AiPostButton setAiPostData={setAiPostData} />
        </div>
      </BrowserView>

      <MobileView>
        <div className="fixed right-5 bottom-16">
          <AiPostButton setAiPostData={setAiPostData} />
        </div>
      </MobileView>
    </>
  );
};

export default AiPost;
