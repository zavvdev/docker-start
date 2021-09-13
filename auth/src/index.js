const express = require("express");
const axios = require("axios");
const { connectDB } = require("./helpers/db");
const { host, port, apiUrl } = require("./config");

const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`Auth service served on ${host}:${port}`);
  });
};

app.get("/test", (req, res) => {
  res.send("Auth is working!");
});

app.get("/callApi", (req, res) => {
  axios.get(apiUrl + "/getUser").then((response) => {
    res.json({
      dataFromApi: response.data,
    });
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Carl",
    id: "1234",
    email: "carl@mail.com",
  });
});

connectDB()
  .on("error", console.log)
  .on("disconnected", connectDB)
  .once("open", startServer);
