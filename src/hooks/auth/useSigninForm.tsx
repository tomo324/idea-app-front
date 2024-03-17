"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signinValidationSchema } from "@/utils/validations/signinValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

interface SigninForm {
  email: string;
  password: string;
}

export const useSigninForm = () => {
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
  } = useForm<SigninForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(signinValidationSchema),
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
