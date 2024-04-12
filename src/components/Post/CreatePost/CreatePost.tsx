"use client";

import { useCreatePost } from "@/hooks/post/useCreatePost";
import { usePostForm } from "@/hooks/post/usePostForm";
import React from "react";

const CreatePost: React.FC = () => {

  const { register, handleSubmit, errors, isValid } = usePostForm();
  const { submitPost } = useCreatePost();

  return (
    <div className="pt-12 p-4 bg-white rounded shadow-md w-80vw sm:w-[600px]">
      <form onSubmit={handleSubmit(submitPost)}>
        <textarea
          id="content"
          placeholder={`例) 毎朝天気に合った音楽を流してくれるアプリ \n その日の天気に合った音楽をSpotifyから探して朝の支度中に流してくれる`}
          {...register("content")}
          className="block resize-none h-40 w-full px-2 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        {errors.content && (
          <p className="text-red-600 text-sm ml-1">
            {errors.content.message as React.ReactNode}
          </p>
        )}
        <div className="text-right">
          <button
            type="submit"
            className={`px-4 py-2 mt-2 text-white rounded ${
              isValid ? "bg-blue-500 hover:bg-blue-400" : "bg-gray-400"
            }`}
            disabled={!isValid}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost;