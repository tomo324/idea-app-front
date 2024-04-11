"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidationSchema } from "@/utils/validations/postValidationSchema";

interface PostForm {
  content: string;
}

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
