import Modal from "@/components/Modal/Modal";
import CreatePost from "@/components/Post/CreatePost/CreatePost";
import React from "react";

const CreatePostPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <CreatePost />
      </Modal>
    </div>
  );
};
export default CreatePostPage;
