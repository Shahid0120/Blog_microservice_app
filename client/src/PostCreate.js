import React from "react";
import { useState } from "react";
import axios from "axios";

function PostCreate() {
  const [title, setTitle] = useState(" ");

  const changeOnPost = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = async function (e) {
    e.preventDefault();
    await axios.post("http://localhost:4003/posts", {
      title,
    });
    setTitle(" ");
    // refresh window
    window.location.reload(false);
    //axios.post
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={changeOnPost}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
