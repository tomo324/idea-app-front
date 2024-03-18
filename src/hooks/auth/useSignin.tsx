"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface SigninForm {
  email: string;
  password: string;
}

export const useSignin = () => {
  const router = useRouter();
  const { reset } = useForm<SigninForm>();

  const submitSignin = async (data: SigninForm) => {
    const signinUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`;
    const { email, password } = data;
  
    try {
      const response = await fetch(signinUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // レスポンスが成功した場合、レスポンスボディは空なので、そのまま次のページに遷移する
        console.log("Success");
        router.push("/home");
      } else {
        // レスポンスが失敗した場合
        const data = await response.json();

        // 'Credentials incorrect'のエラーメッセージを受け取った場合とそれ以外の場合で処理を分ける
        if (data.message === "Credentials incorrect") {
          console.log(
            "Invalid Email address or password. Please try again.",
            data
          );
          alert("Invalid Email address or password. Please try again.");
          reset({ password: "" });
        } else {
          console.log("Server Error", data);
          alert("Server Error");
        }
      }
    } catch (error) {
      console.log("Fetch Error", error);
      alert("Fetch Error");
    }
  };

  return { submitSignin };
};
