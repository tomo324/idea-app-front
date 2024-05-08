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
  posts: Post[];
}
