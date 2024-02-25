import React from "react";
import { useForm } from "react-hook-form";
import { signupValidationSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface SignupForm {
  email: string;
  name: string;
  password: string;
}

const Signup: React.FC = () => {
  const signupUrl = "http://localhost:3333/auth/signup"
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

  // TODO fetch成功時に/homeにルーティングされるようにする
  // TODO パスワード入力欄に目のやつをつける
  // TODO メールアドレスが重複している場合の処理を追加する
  // TODO バックエンドを動かしてテストしてみる

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow-md w-96">
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
            <p className="text-red-600">
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
            <p className="text-red-600">
              {errors.name.message as React.ReactNode}
            </p>
          )}

          <label htmlFor="password" className="block text-sm text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          ></input>
          {errors.password && (
            <p className="text-red-600">
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
