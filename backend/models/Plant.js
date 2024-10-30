const mongoose = require('../db/conn')
const { Schema } = mongoose

const Plant = mongoose.model("Plant", new Schema({ 
  name: { type: String, required: true },
  cientific: { type: String, required: true },
  image: { type: String, required: true },
  user: Object
  }, 
  { timestamps: true },
))

module.exports = Plant