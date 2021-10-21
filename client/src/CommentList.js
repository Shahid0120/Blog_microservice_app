import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComment();
  }, []);

  const fetchComment = async () => {
    const res = axios.get("");
    setComments(res.data);
  };

  const renderingComments = Object.values(comments).map((comment) => {
    return (
      <div className="comments">
        <h2>{comments.length}</h2>
        <h3>{comment.content}</h3>
      </div>
    );
  });
  return (
    <div>
      <h1>Hi</h1>
      {renderingComments}
    </div>
  );
}
