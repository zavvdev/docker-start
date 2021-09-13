const express = require("express");
const axios = require("axios");
const { connectDB } = require("./helpers/db");
const { host, port, authUrl } = require("./config");
const { Post } = require("./models/Post");

const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`Api service served on ${host}:${port}`);
    const post = new Post({
      title: "Post 1",
      text: "Post 1 text",
    });
    post.save((err, saved) => {
      if (err) {
        console.err(err);
      } else {
        console.log(saved);
      }
    });
  });
};

app.get("/test", (req, res) => {
  res.send("Api is working!");
});

app.get("/getUser", (req, res) => {
  res.json({
    name: "Bob",
    age: 42,
    email: "bob@mail.com",
  });
});

app.get("/callAuth", (req, res) => {
  axios.get(authUrl + "/user").then((response) => {
    res.json({
      dataFromAuth: response.data,
    });
  });
});

connectDB()
  .on("error", console.log)
  .on("disconnected", connectDB)
  .once("open", startServer);
