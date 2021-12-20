import React, { useState } from "react";
import "./styles/App.css";
// import CounterClass from "./components/State__CounterClass";
// import CounterFunction from "./components/State__CounterFunction";
import { posts1 } from "./mockData";
import { sortOptions } from "./mockData";
import PostList from "./components/Props__PostList";
import CreatePostForm from "./components/CreatePostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState(posts1);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const onSort = (sort) => {
    console.log("select value", sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  // console.log("render App");

  return (
    <div className="App">
      <CreatePostForm addPost={addPost} />
      <hr />
      <MySelect
        options={sortOptions}
        style={{ marginLeft: "auto" }}
        name="sort"
        onSelectChange={onSort}
      />
      {posts.length ? (
        <PostList
          posts={posts}
          heading="JS List"
          onItemRemove={(id) =>
            setPosts(posts.filter((post) => post.id !== id))
          }
        />
      ) : (
        <h2 style={{ textAlign: "center" }}>There are on posts</h2>
      )}
    </div>
  );
}

export default App;
