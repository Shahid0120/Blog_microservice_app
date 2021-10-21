import axios from "axios";
import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState(" ");

  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Post</h1>
      <PostList />
    </div>
  );
}

export default App;
