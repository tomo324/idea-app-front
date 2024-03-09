"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signupValidationSchema } from "@/utils/validations/signupValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

interface SignupForm {
  email: string;
  name: string;
  password: string;
}

export const useSignupForm = () => {
  // パスワード表示制御
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  // iconの切り替え
  const [icon, setIcon] = useState(faEyeSlash);

  // パスワード表示切り替え時にiconを切り替える
  useEffect(() => {
    setIcon(isRevealPassword ? faEye : faEyeSlash);
  }, [isRevealPassword]);

  // パスワード表示切り替え
  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(signupValidationSchema),
  });

  return {
    isRevealPassword,
    icon,
    togglePassword,
    register,
    handleSubmit,
    errors,
    isValid,
  };
};
