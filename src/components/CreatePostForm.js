import { memo, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyTextInput from "./UI/input/MyTextInput";

const CreatePostForm = memo(({ addPost }) => {
  const [formData, setFormData] = useState({ title: "", body: "" });

  const onPostCreate = (e) => {
    e.preventDefault();

    if (formData.title && formData.body) {
      addPost({ ...formData, id: Date.now() });
    }
    setFormData({ title: "", body: "" });
  };

  // console.log("render CreatePostForm");

  return (
    <div style={{ margin: "30px 0" }}>
      <h2>Create new post</h2>
      <form style={{ display: "flex" }}>
        <div>
          <MyTextInput
            placeholder="title..."
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <MyTextInput
            placeholder="description..."
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            value={formData.body}
          />
          {/* приклад прокидання рефа для дом елемента в компоненті */}
          {/* <UncontrolledInput ref={inputRef} placeholder="description..." /> */}
        </div>
        <MyButton
          children="Create post"
          color="blue"
          onClick={(e) => onPostCreate(e)}
        />
      </form>
    </div>
  );
});

export default CreatePostForm;
