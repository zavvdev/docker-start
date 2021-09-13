const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: String,
  text: String,
});

module.exports.Post = model("Post", postSchema);
