'use client';

import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect"
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";
import Header from "@/components/Header/Header";
import AiPostList from "@/components/AiPost/AiPostList/AiPostList";
import { AiPost as AiPostType} from "@/interface/post-interface";

const AiPost = () => {
  const [aiPostList, setAiPostList] = useState<AiPostType[]>([]);

  return (
    <div>

      <Header />

      <BrowserView>
        <Sidebar />
      </BrowserView>

      <MobileView>
        <Footer />
      </MobileView>

      <AiPostList aiPostList={aiPostList} setAiPostList={setAiPostList}/>

    </div>
  );
}

export default AiPost;