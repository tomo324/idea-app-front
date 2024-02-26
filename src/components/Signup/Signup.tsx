'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signupValidationSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";


interface SignupForm {
  email: string;
  name: string;
  password: string;
}

const Signup: React.FC = () => {
  const signupUrl = "http://localhost:3333/auth/signup"

  // パスワード表示制御
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(signupValidationSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    const { email, name, password } = data;

    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // レスポンスが成功した場合
        console.log("Success", data);
      } else {
        // レスポンスが失敗した場合
        console.log("Server Error", data);
        alert("Server Error");
      }
    } catch (error) {
      console.log("Fetch Error", error);
      alert("Fetch Error");
    }
  };

  // TODO レスポンシブ対応する
  // TODO メールアドレスが重複している場合の処理を追加する
  // TODO fetchでsignTokenを受け取った場合、その情報を持って/homeに遷移する。'Email already exists'エラーを受け取った場合はエラーメッセージを表示する。
  // 遷移前にemailが重複していないか確認できるようにする。react-router-domのuseHistoryを使う
  // TODO 遷移先のコンポーネントでも、ユーザー情報が渡されていなければ'backend/users/me'から独自で取得するようにする
  // TODO モーダルと連携する
  // TODO バックエンドを動かしてテストしてみる

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow-md w-full sm:w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-700">
            Sign Up
          </h2>
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          ></input>
          {errors.email && (
            <p className="text-red-600 text-sm">
              {errors.email.message as React.ReactNode}
            </p>
          )}

          <label htmlFor="name" className="block text-sm text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          ></input>
          {errors.name && (
            <p className="text-red-600 text-sm">
              {errors.name.message as React.ReactNode}
            </p>
          )}

          <div className="relative">
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password
            </label>
            <input
              type={isRevealPassword ? 'text' : 'password'}
              id="password"
              {...register("password")}
              className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            ></input>
            <span
              onClick={togglePassword}
              role="presentation"
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              style={{ top: '40%' }}
            >
              {isRevealPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm">
              {errors.password.message as React.ReactNode}
            </p>
          )}

          <button
            type="submit"
            className={`w-full px-4 py-2 mt-2 text-white rounded ${isValid ? 'bg-blue-500 hover:bg-blue-400' : 'bg-gray-400'}`}
            disabled={!isValid}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
