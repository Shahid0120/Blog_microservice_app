const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
// parsers all reqs sent from post to ensure json file is parsed into normal text
// source code for cors as not working for some reason
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// when you use app.use => middleware
app.use(bodyParser.json());

// stores all the posts
const posts = {};
//
app.get("/posts", (req, res) => {
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
  res.status(201).send(posts[id]);
});

app.listen(4003, () => {
  console.log("listening on port 4003...");
});
