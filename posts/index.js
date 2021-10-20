const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
// parsers all reqs sent from post to ensure json file is parsed into normal text

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// stores all the posts
const posts = {};

app.get("/posts", (req, res) => {
  // if anyone send a get request
  // send back all posts
  // poo
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
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
