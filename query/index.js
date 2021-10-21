const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  // send back entrie res object
  res.send(posts);
});

app.post("/events", (req, res) => {
  // hi
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comment: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content });
  }
  console.log(posts);
  // we recived the event and processed it
  res.send({});
});

app.listen(4010, () => {
  console.log("Listening on port 4010...");
});
