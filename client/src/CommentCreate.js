import axios from "axios";
import React, { useState } from "react";

function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
    window.location.reload(false);
  };

  const contentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={contentChange}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
  // mine own
  //     const [comment, setComment] = useState("");
  //     const changeOnComment = (event) => {
  //       setComment(event.target.value);
  //     };
  //     const onSubmit = async (event) => {
  //       event.preventDefault();
  //       await axios.post("", {
  //         comment,
  //       });
  //       setComment("");
  //       window.location.reload(false);
  //     };
  //     return (
  //       <form onSubmit={onSubmit}>
  //         <h1>Title</h1>
  //         <input value={comment} onChange={changeOnComment} />
  //         <button>Submit</button>
  //       </form>
  //     );
}

export default CommentCreate;
