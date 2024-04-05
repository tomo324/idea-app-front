interface Post {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
}

const PostItem = ({ post }: { post: Post }) => {
  if (!post) {
    return <div>No post data</div>;
  }

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}

export default PostItem;