// basic express boilerplate code
const express = require("express");
const { createTodo } = require("./types");
const { updateTodo} = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    // Putting in MongoDB using .then
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })
    .then((createdTodo) => {
        res.status(200).json({
            msg: "Todo created successfully",
            data: createdTodo
        });
    })
    .catch(function(error) {
        res.status(500).json({
            msg: "There was an error creating the todo",
            error: error.message
        });
    });
});


app.get("/todos",function(req, res){
    todo.find({})
    .then(function(todo){
        res.status(200).json({
            msg: "Your todos are:",
            todo: todo
        })
    })
    .catch(function(error){
        res.status(500).json({
            msg: "There was a problem in fetching the todos",
            error: error.message
        })
    })
})

// update a specific todo
app.put("/completed",function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    .then(function(todo){
        res.status(200).json({
            msg: "Your todo is successfully updated"
        })
    })
    .catch(function(error){
        res.status(500).json({
            msg: "There was a problem in updating the todos",
            error: error.message
        })
    })
})