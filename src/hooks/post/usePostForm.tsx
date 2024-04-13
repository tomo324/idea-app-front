"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidationSchema } from "@/utils/validations/postValidationSchema";
import { PostForm } from "@/interface/post-interface";


export const usePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PostForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(postValidationSchema),
  });

  return { register, handleSubmit, errors, isValid};
};
