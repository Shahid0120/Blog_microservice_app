import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  // useEffect ensure that fetch data is only called once
  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    console.log(comment);
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

// my own code
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     fetchComment();
//   }, []);

//   const fetchComment = async () => {
//     const res = axios.get("");
//     setComments(res.data);
//   };

//   const renderingComments = Object.values(comments).map((comment) => {
//     return (
//       <div className="comments">
//         <h2>{comments.length}</h2>
//         <h3>{comment.content}</h3>
//       </div>
//     );
//   });
//   return (
//     <div>
//       <h1>Hi</h1>
//       {renderingComments}
//     </div>
//   );
