const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const app = express();

// parsers
// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// object for all comments for specific post
const commentsByIdPost = {};

// get request
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByIdPost[req.params.id]) || [];
});

// post request
app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  // if there is a mistake if req.params.id doesnt work
  const comments = commentsByIdPost[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByIdPost[req.params.id] = comments;
  // for message bus
  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });
  res.status(201).send(comments);
});

// cant have same port at post 4000
app.listen(4001, () => {
  console.log("Lisenting on 4001...");
});
