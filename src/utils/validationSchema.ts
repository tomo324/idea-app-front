import { z } from "zod";

export const signupValidationSchema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスは必須です")
    .max(255, "メールアドレスは255文字以内で入力してください")
    .email("メールアドレスの形式が正しくありません"),
  name: z
    .string()
    .min(1, "名前は必須です")
    .max(20, "名前は20文字以内で入力してください"),
  password: z
    .string()
    .min(6, "パスワードは6文字以上で入力してください")
    .max(127, "パスワードは127文字以内で入力してください"),
});
