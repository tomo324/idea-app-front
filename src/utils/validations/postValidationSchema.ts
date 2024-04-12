import { z } from "zod";

export const postValidationSchema = z.object({
  content: z
    .string()
    .min(1, "投稿内容は必須です")
    .max(230, "230文字以内で入力してください")
});
