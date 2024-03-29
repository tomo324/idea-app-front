"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSignin } from "@/hooks/auth/useSignin";
import { useSigninForm } from "@/hooks/auth/useSigninForm";

const Signin: React.FC = () => {
  // カスタムフックの呼び出し
  const {
    isRevealPassword,
    icon,
    togglePassword,
    register,
    handleSubmit,
    errors,
    isValid,
  } = useSigninForm();

  const { submitSignin } = useSignin();

  return (
    <div className="p-8 bg-white rounded shadow-md w-80vw sm:w-96">
      <form onSubmit={handleSubmit(submitSignin)}>
        <h2 className="mb-8 text-3xl font-semibold text-center text-gray-700">
          Login
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

        <div className="relative">
          <label htmlFor="password" className="block text-sm text-gray-700">
            Password
          </label>
          <input
            type={isRevealPassword ? "text" : "password"}
            id="password"
            {...register("password")}
            className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          ></input>
          <span
            onClick={togglePassword}
            role="presentation"
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            style={{ top: "40%" }}
          >
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
        {errors.password && (
          <p className="text-red-600 text-sm">
            {errors.password.message as React.ReactNode}
          </p>
        )}

        <button
          type="submit"
          className={`w-full px-4 py-2 mt-2 text-white rounded ${
            isValid ? "bg-blue-500 hover:bg-blue-400" : "bg-gray-400"
          }`}
          disabled={!isValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
