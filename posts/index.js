const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
// parsers all reqs sent from post to ensure json file is parsed into normal text
app.use(bodyParser.json());

// stores all the posts
const posts = {};

app.get("/post", (req, res) => {
  // if anyone send a get request
  // send back all posts
  res.send(posts);
});

app.post("/posts", (req, res) => {
  // anytime someone post a post
  // random hexadecimal id
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(post[id]);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
