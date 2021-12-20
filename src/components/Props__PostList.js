import PostItem from "./Props__PostItem";

const PostList = ({ posts, heading, onItemRemove }) => {
  // console.log("render PostList");

  return (
    <div>
      <h1>{heading}</h1>
      {posts.map((post, i) => (
        <PostItem
          post={post}
          count={i + 1}
          onItemRemove={onItemRemove}
          key={`${post.id}`}
        />
      ))}
    </div>
  );
};
export default PostList;
