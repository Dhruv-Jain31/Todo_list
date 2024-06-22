const mongoose = require("mongoose")

/*
  /  Todo {
      title: string;
      description: string;
      completed: boolean
    }
*/

mongoose.connect("mongodb+srv://dhruv:dhruv@cluster0.9nyvtnq.mongodb.net/Todo_app")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}