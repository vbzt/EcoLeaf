const mongoose = require('../db/conn')
const { Schema } = mongoose

const Post = mongoose.model("Post", new Schema({ 
  title: { type: String, required: true },
  image: { type: String, required: false },
  user: Object
  }, 
  { timestamps: true },
))

module.exports = Post