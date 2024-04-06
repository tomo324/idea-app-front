import PostItem from "../PostItem/PostItem";

type Post = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
}

const PostList: React.FC = () => {
  const post: Post[] = [{
    id: 1,
    content: "テストコンテンツ。            ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。                                         ",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    authorId: 1,
  },
  {
    id: 2,
    content: "テストコンテンツ。ここにはコンテンツが入ります。ここにはコンテンツが入ります。ここにはコンテンツが入ります。",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    authorId: 2,
  }]

  if (post.length === 0) {
    return <div>No post data</div>;
  }
  return (
    <>
      {post.map((post) => (
        <div key={post.id} className="sm:ml-20 mt-16 mb-10">
          <PostItem post={post} />
        </div>
      ))}
    </>
  );
}

export default PostList;