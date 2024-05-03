export interface Post {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
}

export interface PostForm {
  content: string;
}

export interface AiPost {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  post_to_aiposts: PostToAiPost[];
}

export interface PostToAiPost {
  id: number;
  postId: number;
  aipostId: number;
  post: Post;
}