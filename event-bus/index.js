const express = require("express");

const axios = require("axios");

const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post("/events", (req, res) => {
  // title
  const event = req.body;
  console.log(event);
  // have to change this for my own server ports
  // this is emmintg the events all services event though they might not use it
  // in this case only the query service is useing the event not the post service/comments service
  app.post("http://localhost:4001/events", event);
  app.post("http://localhost:4003/events", event);
  app.post("http://localhost:4010/events", event);
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on Port 4005...");
});
