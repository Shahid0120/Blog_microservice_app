import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
function PostList() {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4003/posts");
    setPost(res.data);
  };

  // what does object.value do =>
  const renderedPost = Object.values(post).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        // react is  expecting unique value for each map value
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        {/* my own code */}
        <div>
          <CommentList />
          <CommentCreate />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <h1>hi</h1>
      {renderedPost}
    </div>
  );
}

export default PostList;
