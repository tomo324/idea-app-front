"use client";

import { useRouter } from "next/navigation";

interface SignupForm {
  email: string;
  name: string;
  password: string;
}

export const useSignup = () => {
  const router = useRouter();

  const submitSignup = async (data: SignupForm) => {
    const signupUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signup`;
    const { email, name, password } = data;

    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
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

        // "Email already exists"のエラーメッセージを受け取った場合とそれ以外の場合で処理を分ける
        if (data.message === "Email already exists") {
          console.log("Email already exists", data);
          alert("Email already exists");
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

  return { submitSignup };
};
