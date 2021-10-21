import axios from "axios";
import React, { useState } from "react";

function CommentCreate() {
  const [comment, setComment] = useState("");

  const changeOnComment = (event) => {
    setComment(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("", {
      comment,
    });
    setComment("");
    window.location.reload(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Title</h1>
      <input value={comment} onChange={changeOnComment} />
      <button>Submit</button>
    </form>
  );
}

export default CommentCreate;
