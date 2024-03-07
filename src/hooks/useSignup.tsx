import { useRouter } from "next/navigation";
import { apiUrl } from "@/consts/apiUrl";
import { cookies } from "next/headers";

interface SignupForm {
  email: string;
  name: string;
  password: string;
}

export const useSignup = () => {
  const router = useRouter();

  const submitSignup = async (data: SignupForm) => {
    const signupUrl = `${apiUrl.URL}/auth/signup`;
    const { email, name, password } = data;

    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        mode: "cors",
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
        // レスポンスが成功した場合の処理
        console.log("Success");

        // CookieにJWT tokenを保存する
        cookies().set({name: "access_token", value: data.access_token, path: "/"})
        router.push("/home");
      } else {
        // レスポンスが失敗した場合

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
}