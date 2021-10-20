const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

// parsers
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// object for all comments for specific post
const commentsByIdPost = {};

// get request
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByIdPost[req.params.id]) || [];
});

// post request
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  // if there is a mistake if req.params.id doesnt work
  const comments = commentsByIdPost[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByIdPost[req.params.id] = comments;
  res.status(201).send(comments);
});

// cant have same port at post 4000
app.listen(4001, () => {
  console.log("Lisenting on 4001...");
});
