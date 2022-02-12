// import express module
const express = require("express");

// import all data files
const usersController = require("./src/controllers/users.js");
const postsController = require("./src/controllers/posts.js");
const todosController = require("./src/controllers/todos.js");



// app is object of express now
const app = express();

app.get("/", (req, res) => {
    // let sey = { mert : 'MERT VE ZEYNEP'}
    res.send('<h1 style="color: brown;">Mert ve Zweynek</h1>')
})


// USERS ---
app.get("/users", (req, res) => {
  // get all USERS
  let users = usersController.getAllUsers();
  res.send(users);
});

// with ":/userID" expression, "user" needs "userId" now
app.get("/users/:userId", (req, res) => {
  // get selected "user"
  let user = usersController.getUserById(req.params.userId);
  res.send(user);
});
// ----


// POSTS ---
app.get("/posts", (req, res) => {
  let posts = postsController.getAllPosts();
  res.send(posts);
});

app.get("/posts/:postId", (req, res) => {
  let post = postsController.getPostById(req.params.postId);
  res.send(post);
});
// ----


// TODOS
app.get("/todos", (req, res) => {
    let todos = todosController.getAllTodos();
    res.send(todos);
})

app.get("/todos/:todosId", (req, res) => {
    let todo = todosController.getTodoById(req.params.todosId);
    res.send(todo);
})
// -----


  // PORT number
const PORT = 5005;
    
  // listening server
app.listen(PORT);







