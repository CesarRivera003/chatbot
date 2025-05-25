 const mongoose = require("mongoose")

 const chatSchema = new mongoose.Schema({
    question: {type: String, require: true},
    answer: { type: String, require: true},
 })

 module.exports = mongoose.model("Chat", chatSchema)
 