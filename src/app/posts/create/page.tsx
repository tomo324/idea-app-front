import Modal from "@/components/Modal/Modal";
import CreatePost from "@/components/Post/CreatePost/CreatePost";
import Link from "next/link";
import React from "react";

const CreatePostPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Link href="/home">← back to top</Link>
      <CreatePost />
    </main>
  );
};
export default CreatePostPage;
