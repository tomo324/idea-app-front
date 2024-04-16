'use client';

import React from "react";
import { BrowserView, MobileView } from "react-device-detect"
import Sidebar from "@/components/Menu/Sidebar/Sidebar";
import Footer from "@/components/Menu/Footer/Footer";
import Header from "@/components/Header/Header";
import PostList from "@/components/Post/PostList/PostList";


const Post = () => {
  return (
    <div>
      <Header />

      <BrowserView>
        <Sidebar />
      </BrowserView>

      <MobileView>
        <Footer />
      </MobileView>

      <PostList />
    </div>
  );
}

export default Post;