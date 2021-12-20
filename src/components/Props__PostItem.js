import MyButton from "./UI/button/MyButton";

const PostItem = ({ post, count, onItemRemove }) => {
  const { id, title, body } = post;

  return (
    <div className="post-item">
      <div>
        <p>{`${count}. ${title}`}</p>
        <p>{body}</p>
      </div>
      <MyButton type="button" color="brown" onClick={() => onItemRemove(id)}>
        remove
      </MyButton>
    </div>
  );
};

export default PostItem;
